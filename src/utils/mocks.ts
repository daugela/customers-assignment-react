import { Address, CustomersDataState, GlobalReduxState, ModalsState, SingleCustomer } from '../types';

export const mockGlobalReduxState = (): GlobalReduxState => ({
    customersDataReducer: {
        customers: {},
    } as CustomersDataState,
    modalsReducer: {
        addCustomerModal: false,
    } as ModalsState,
});

export const coordsMock = {
    latitude: 0.0,
    longitude: 0.0,
};

export const customerAddressMock: Address = {
    city: '',
    street: '',
    house: '',
    zip: '',
    coords: coordsMock,
};

export const customerMock: SingleCustomer = {
    fullName: '',
    email: '',
    address: customerAddressMock,
    unid: undefined,
};
