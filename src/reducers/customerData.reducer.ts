import { v4 as uuidv4 } from 'uuid';
import {
    CustomersDataState,
    CustomerSaveAction,
    CustomerRemoveAction,
    CUSTOMER_SAVE,
    CUSTOMER_REMOVE,
    CustomersData,
} from '../types';

const initialState: CustomersDataState = { customers: {} };

const customerDataReducer = (state = initialState, action: CustomerSaveAction | CustomerRemoveAction) => {
    switch (action.type) {
        case CUSTOMER_SAVE:
            const unid = action.payload.customer.unid ? action.payload.customer.unid : uuidv4();

            return {
                ...state,
                customers: {
                    ...state.customers,
                    [unid]: { ...action.payload.customer, unid },
                },
            };

        case CUSTOMER_REMOVE:
            return {
                ...state,
                customers: Object.keys(state.customers).reduce((updatedCustomers: CustomersData, key) => {
                    if (key !== action.payload.unid) updatedCustomers[key] = state.customers[key];
                    return updatedCustomers;
                }, {}),
            };

        default:
            return state;
    }
};

export default customerDataReducer;
