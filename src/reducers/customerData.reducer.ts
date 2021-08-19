import { v4 as uuidv4 } from 'uuid';
import {
    CustomersDataState,
    CustomerAddAction,
    CustomerEditAction,
    CustomerRemoveAction,
    CUSTOMER_ADD,
    CUSTOMER_EDIT,
    CUSTOMER_REMOVE
} from '../types';

const initialState: CustomersDataState = { customers: {}}

const customerDataReducer = (
    state = initialState,
    action: CustomerAddAction | CustomerEditAction | CustomerRemoveAction
) => {
    switch (action.type) {

        case CUSTOMER_ADD:

            return {
                ...state,
                customers: {
                    ...state.customers,
                    [uuidv4()]: action.payload.customer
                }
            };

        case CUSTOMER_EDIT:

            return {
                ...state,
                customers: {
                    ...state.customers,
                    [uuidv4()]: action.payload.customer
                }
            };

        case CUSTOMER_REMOVE:

            return {
                ...state,
                customers: {
                    ...state.customers
                }
            };

        default:
            return state;
    }
};

export default customerDataReducer;