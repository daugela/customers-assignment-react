import {
    ModalsState,
    AddCustomerModalCloseAction,
    AddCustomerModalOpenAction,
    ADD_CUSTOMER_MODAL_OPEN,
    ADD_CUSTOMER_MODAL_CLOSE,
} from '../types';

const initialState: ModalsState = { addCustomerModal: false };

const modalsReducer = (state = initialState, action: AddCustomerModalOpenAction | AddCustomerModalCloseAction) => {
    switch (action.type) {
        case ADD_CUSTOMER_MODAL_OPEN:
            return {
                ...state,
                addCustomerModal: true,
            };

        case ADD_CUSTOMER_MODAL_CLOSE:
            return {
                ...state,
                addCustomerModal: false,
            };

        // Add cases for other modals here :)

        default:
            return state;
    }
};

export default modalsReducer;
