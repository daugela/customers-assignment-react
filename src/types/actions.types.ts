import { SingleCustomer } from '.'

export const CUSTOMER_ADD = 'CUSTOMER_ADD';
export const CUSTOMER_EDIT = 'CUSTOMER_EDIT';
export const CUSTOMER_REMOVE = 'CUSTOMER_REMOVE';

export const FETCH_COORDS_START = 'FETCH_COORDS_START';
export const FETCH_COORDS_ERROR = 'FETCH_COORDS_ERROR';
export const FETCH_COORDS_SUCCESS = 'FETCH_COORDS_SUCCESS';

export interface CustomerAddAction {
    type: typeof CUSTOMER_ADD,
    payload: { customer: SingleCustomer }
}

export interface CustomerEditAction {
    type: typeof CUSTOMER_EDIT,
    payload: { customer: SingleCustomer }
}

export interface CustomerRemoveAction {
    type: typeof CUSTOMER_REMOVE,
    payload: { customer: SingleCustomer }
}