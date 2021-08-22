import axios from 'axios';
import { Dispatch } from 'redux';
import {
    FETCH_COORDS_START,
    FETCH_COORDS_SUCCESS,
    FETCH_COORDS_ERROR,
    SingleCustomer,
    CUSTOMER_SAVE,
    ADD_CUSTOMER_MODAL_CLOSE,
    CUSTOMER_REMOVE,
} from '../types';

const saveCustomer = (customer: SingleCustomer) => {
    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY ? process.env.REACT_APP_GOOGLE_API_KEY : 'YOUR_API_KEY';
    // Quite dirty here - just construct query from passed address
    // As example in Google docs is '1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    const locationQuery = `${customer.address.street}+${customer.address.house},+${customer.address.city},+${customer.address.zip}`;

    return async (dispatch: Dispatch) => {
        try {
            dispatch({ type: FETCH_COORDS_START });

            const response = await axios.get(`/api/geocode/json?address=${locationQuery}&key=${googleApiKey}`);

            // Log the response data from Google
            console.log(response.data);

            // Check Google response content as save customer
            if (response.status === 200 && response.statusText === 'OK') {
                dispatch({ type: FETCH_COORDS_SUCCESS });

                dispatch({
                    type: CUSTOMER_SAVE,
                    payload: {
                        customer: {
                            ...customer,
                            address: { ...customer.address, coords: response.data.results[0].geometry.location },
                        },
                    },
                });
                dispatch({ type: ADD_CUSTOMER_MODAL_CLOSE });
            } else {
                dispatch({
                    type: FETCH_COORDS_ERROR,
                    payload: { message: 'Was not able to fetch coords. Please try again.' },
                });
            }
        } catch (error) {
            dispatch({
                type: FETCH_COORDS_ERROR,
                payload: { message: 'Was not able to fetch coords. Please try again.' },
            });
            console.error('Coords error: ' + error);
        }
    };
};

const deleteCustomer = (unid: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CUSTOMER_REMOVE, payload: { unid } });
    };
};

export const customersActions = { saveCustomer, deleteCustomer };
