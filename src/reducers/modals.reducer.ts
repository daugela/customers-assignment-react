import {
    ModalsState,
    AddCustomerModalCloseAction,
    AddCustomerModalOpenAction,
    ADD_CUSTOMER_MODAL_OPEN,
    ADD_CUSTOMER_MODAL_CLOSE,
    FetchCoordsStartAction,
    FetchCoordsSuccessAction,
    FetchCoordsErrorAction,
    FETCH_COORDS_START,
    FETCH_COORDS_ERROR,
    FETCH_COORDS_SUCCESS,
} from '../types';

const initialState: ModalsState = { addCustomerModal: false, error: '' };

const modalsReducer = (
    state = initialState,
    action:
        | AddCustomerModalOpenAction
        | AddCustomerModalCloseAction
        | FetchCoordsStartAction
        | FetchCoordsSuccessAction
        | FetchCoordsErrorAction,
) => {
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

        case FETCH_COORDS_START:
            return {
                ...state,
                error: '',
            };

        case FETCH_COORDS_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };

        case FETCH_COORDS_SUCCESS:
            return {
                ...state,
                error: '',
            };

        // Add cases for other modals here :)

        default:
            return state;
    }
};

export default modalsReducer;
