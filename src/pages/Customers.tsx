import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../components';
import { GlobalReduxState } from '../types/states.types';
import { modalActions } from '../actions';

export const Customers = () => {
    
    const dispatch = useDispatch();

    // Tap into reducers..
    const { customerModal } = useSelector((state: GlobalReduxState) => ({
        customerModal: state.modalsReducer.addCustomerModal
    }));

    const openModal = () => {
        dispatch(modalActions.openCustomerModal());
    }

    const closeModal = () => {
        dispatch(modalActions.closeCustomerModal());
    }

    return (
        <>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <h1 className="display--2">Hello</h1>
            <button onClick={()=> openModal()}>Open</button>
            <span style={{ fontSize: "16px", lineHeight: "24px" }}>We can not find the page you're looking for.</span>
            <span style={{ fontSize: "16px", lineHeight: "24px" }}>Try going back to the previous page</span>
        </div>
    
        <Modal closeHandler={closeModal} active={customerModal}/>
        </>
    )
};