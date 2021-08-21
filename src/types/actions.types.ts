import { SingleCustomer } from '.';

export const CUSTOMER_ADD = 'CUSTOMER_ADD';
export const CUSTOMER_EDIT = 'CUSTOMER_EDIT';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';

export const FETCH_COORDS_START = 'FETCH_COORDS_START';
export const FETCH_COORDS_ERROR = 'FETCH_COORDS_ERROR';
export const FETCH_COORDS_SUCCESS = 'FETCH_COORDS_SUCCESS';

export const ADD_CUSTOMER_MODAL_CLOSE = 'ADD_CUSTOMER_MODAL_CLOSE';
export const ADD_CUSTOMER_MODAL_OPEN = 'ADD_CUSTOMER_MODAL_OPEN';

export interface CustomerAddAction {
    type: typeof CUSTOMER_ADD;
    payload: any;
}

export interface CustomerEditAction {
    type: typeof CUSTOMER_EDIT;
    payload: any;
}

export interface CustomerRemoveAction {
    type: typeof CUSTOMER_REMOVE;
    //payload: { customer: SingleCustomer }
}

export interface AddCustomerModalOpenAction {
    type: typeof ADD_CUSTOMER_MODAL_OPEN;
}

export interface AddCustomerModalCloseAction {
    type: typeof ADD_CUSTOMER_MODAL_CLOSE;
}
