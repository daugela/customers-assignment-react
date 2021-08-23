import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, CustomerForm, Button } from '../components';
import { GlobalReduxState } from '../types/states.types';
import { modalActions } from '../actions';
import { SingleCustomer } from '../types';
import { customerMock } from '../utils/mocks';
import { customersActions } from '../actions';

export const Customers: React.FC = () => {
    const dispatch = useDispatch();

    // Tap into reducers..
    const { modal, customers } = useSelector((state: GlobalReduxState) => ({
        modal: state.modalsReducer.addCustomerModal,
        customers: state.customersDataReducer.customers,
    }));

    const [customer, setCustomer] = useState<SingleCustomer>(customerMock);

    const openModal = () => {
        dispatch(modalActions.openCustomerModal());
    };

    const closeModal = () => {
        dispatch(modalActions.closeCustomerModal());
        setCustomer(customerMock);
    };

    const updateCustomerData = (target: HTMLInputElement) => {
        if (['fullName', 'email'].includes(target.id)) {
            setCustomer({ ...customer, [target.id]: target.value });
        }
        if (['city', 'street', 'house', 'zip'].includes(target.id)) {
            setCustomer({ ...customer, address: { ...customer.address, [target.id]: target.value } });
        }
    };

    const submitCustomerData = () => {
        dispatch(customersActions.saveCustomer(customer));
        setCustomer(customerMock);
    };

    const editCustomerData = (unid: string) => {
        setCustomer(customers[unid]);
        openModal();
    };

    const deleteCustomerData = (unid: string) => {
        dispatch(customersActions.deleteCustomer(unid));
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                <h1>My awesome customer database</h1>

                <Button clickHandler={openModal} title="Create new customer" />

                <ul className="customer-list">
                    {Object.keys(customers).map((unid: string) => (
                        <li key={unid} className="customer-list__item">
                            <span>{customers[unid].fullName}</span>
                            <a href={`mailto:${customers[unid].email}`} className="link">
                                {customers[unid].email}
                            </a>
                            <div className="customer-list__item__tools">
                                <Button title="Edit" outline clickHandler={() => editCustomerData(unid)} />
                                <Button title="Delete" outline clickHandler={() => deleteCustomerData(unid)} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal closeHandler={closeModal} active={modal}>
                <CustomerForm
                    updateHandler={updateCustomerData}
                    submitHandler={submitCustomerData}
                    fullName={customer.fullName}
                    email={customer.email}
                    {...customer.address}
                />
            </Modal>
        </>
    );
};
