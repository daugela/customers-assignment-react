import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, CustomerForm } from '../components';
import { GlobalReduxState } from '../types/states.types';
import { modalActions } from '../actions';
import { SingleCustomer } from '../types';
import { customerMock } from '../utils/mocks';

export const Customers: React.FC = () => {
    const dispatch = useDispatch();

    // Tap into reducers..
    const { customerModal } = useSelector((state: GlobalReduxState) => ({
        customerModal: state.modalsReducer.addCustomerModal,
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

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
                <h1 className="display--2">Hello</h1>
                <button onClick={() => openModal()}>Create new customer</button>
                <span style={{ fontSize: '16px', lineHeight: '24px' }}>
                    We can not find the page you're looking for.
                </span>
                <span style={{ fontSize: '16px', lineHeight: '24px' }}>Try going back to the previous page</span>
            </div>

            <Modal closeHandler={closeModal} active={customerModal}>
                <CustomerForm
                    updateHandler={updateCustomerData}
                    fullName={customer.fullName}
                    email={customer.email}
                    {...customer.address}
                />
            </Modal>
        </>
    );
};
