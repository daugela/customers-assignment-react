import { SingleCustomer } from '.';

export const CUSTOMER_SAVE = 'CUSTOMER_SAVE';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';

export const FETCH_COORDS_START = 'FETCH_COORDS_START';
export const FETCH_COORDS_ERROR = 'FETCH_COORDS_ERROR';
export const FETCH_COORDS_SUCCESS = 'FETCH_COORDS_SUCCESS';

export const ADD_CUSTOMER_MODAL_CLOSE = 'ADD_CUSTOMER_MODAL_CLOSE';
export const ADD_CUSTOMER_MODAL_OPEN = 'ADD_CUSTOMER_MODAL_OPEN';

export interface CustomerSaveAction {
    type: typeof CUSTOMER_SAVE;
    payload: { customer: SingleCustomer };
}
export interface CustomerRemoveAction {
    type: typeof CUSTOMER_REMOVE;
    payload: { unid: string };
}

export interface AddCustomerModalOpenAction {
    type: typeof ADD_CUSTOMER_MODAL_OPEN;
}

export interface AddCustomerModalCloseAction {
    type: typeof ADD_CUSTOMER_MODAL_CLOSE;
}

export interface FetchCoordsStartAction {
    type: typeof FETCH_COORDS_START;
}

export interface FetchCoordsErrorAction {
    type: typeof FETCH_COORDS_ERROR;
    payload: { error: string };
}

export interface FetchCoordsSuccessAction {
    type: typeof FETCH_COORDS_SUCCESS;
}
