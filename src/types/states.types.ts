import { CustomersData } from '.';

export interface CustomersDataState {
    customers: CustomersData;
}
export interface ModalsState {
    addCustomerModal: boolean;
    error: string;
}
export interface GlobalReduxState {
    customersDataReducer: CustomersDataState;
    modalsReducer: ModalsState;
}
