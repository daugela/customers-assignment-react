// These are basically wrappers.
// You can dispatch simple action from page
// But this is just slightly more consistent

import { ADD_CUSTOMER_MODAL_OPEN, ADD_CUSTOMER_MODAL_CLOSE } from "../types/actions.types";

const openCustomerModal = () => {

    return (dispatch: any) => {
        dispatch({ type: ADD_CUSTOMER_MODAL_OPEN });
    }
};

const closeCustomerModal = () => {

    return (dispatch: any) => {
        dispatch({ type: ADD_CUSTOMER_MODAL_CLOSE });
    }
};

export const modalActions = { openCustomerModal, closeCustomerModal };