import { Address } from '.';

export interface SingleCustomer {
    fullName: string;
    email: string;
    address: Address;
    unid: string | undefined;
}

export interface CustomersData {
    [index: string]: SingleCustomer;
}
