import { CustomersData } from '.'

export interface CustomersDataState {
    customers: CustomersData
}
export interface ModalsState {
    addCustomerModal: boolean
}
export interface GlobalReduxState {
    customersDataReducer: CustomersDataState,
    modalsReducer: ModalsState
}