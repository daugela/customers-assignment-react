import { Address } from '.';

export interface SingleCustomer {
    fullName: string;
    email: string;
    address: Address;
    unid: string;
}

export interface CustomersData {
    [index: string]: SingleCustomer;
}
