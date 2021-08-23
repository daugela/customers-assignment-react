import { AllResolvedCustomerActions, CustomersDataState, CUSTOMER_SAVE } from '../types';
import customerDataReducer, { initialState } from './customerData.reducer';
import { customerMock, mockGlobalReduxState } from '../utils/mocks';

describe('Test data/CustomerData reducer, actions', () => {
    const mockRootState = (customersDataReducer: CustomersDataState) => mockGlobalReduxState({ customersDataReducer });

    it('should return the initial state on the first run', () => {
        const noAction = {} as AllResolvedCustomerActions;
        const result = customerDataReducer(undefined, noAction);
        expect(result).toEqual(initialState);
    });

    it('should correctly save new Customer with generated UNID', () => {
        const mockedStateWithNoCustomers: CustomersDataState = { customers: {} };
        const payload = { customer: customerMock };

        const updatedState = customerDataReducer(mockedStateWithNoCustomers, { type: CUSTOMER_SAVE, payload });

        const resultState = mockRootState(updatedState);

        const expectedNewlyCreatedUnid = Object.keys(resultState.customersDataReducer.customers)[0];

        expect(Object.values(resultState.customersDataReducer.customers)).toStrictEqual([
            {
                ...customerMock,
                unid: expectedNewlyCreatedUnid,
            },
        ]);
    });
});
