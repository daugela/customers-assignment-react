import { Address, CustomersDataState, GlobalReduxState, ModalsState, SingleCustomer } from '../types';
import { initialState as initialCustomerState } from '../reducers/customerData.reducer';
import { initialState as initialModalsState } from '../reducers/modals.reducer';
export interface MockGlobalStateArgs {
    customersDataReducer?: CustomersDataState;
    modalsReducer?: ModalsState;
}

export const mockGlobalReduxState = ({
    customersDataReducer = initialCustomerState,
    modalsReducer = initialModalsState,
}: MockGlobalStateArgs): GlobalReduxState => ({
    customersDataReducer: customersDataReducer,
    modalsReducer: modalsReducer,
});

export const coordsMock = {
    lat: 0.0,
    lng: 0.0,
};

export const customerAddressMock: Address = {
    city: '',
    street: '',
    house: '',
    zip: '',
    coords: coordsMock,
};

export const customerMock: SingleCustomer = {
    fullName: '',
    email: '',
    address: customerAddressMock,
    unid: undefined,
};
