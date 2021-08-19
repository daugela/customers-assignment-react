import { Address } from '.';

export interface SingleCustomer {
    fullName: string,
    email: string,
    address: Address
}

export interface CustomersData {
    [index: string]: SingleCustomer
}
