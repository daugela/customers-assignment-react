// These are basically wrappers.
// You can dispatch simple action from page
// But this is just slightly more consistent

import { Dispatch } from 'redux';
import { ADD_CUSTOMER_MODAL_OPEN, ADD_CUSTOMER_MODAL_CLOSE } from '../types/actions.types';

const openCustomerModal = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: ADD_CUSTOMER_MODAL_OPEN });
    };
};

const closeCustomerModal = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: ADD_CUSTOMER_MODAL_CLOSE });
    };
};

export const modalActions = { openCustomerModal, closeCustomerModal };
