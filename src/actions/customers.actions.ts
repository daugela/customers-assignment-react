import axios from 'axios';
import { FETCH_COORDS_START, FETCH_COORDS_SUCCESS, FETCH_COORDS_ERROR } from '../types';

const fetchCoordsByAddress = (address: string) => {
    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY ? process.env.REACT_APP_GOOGLE_API_KEY : 'YOUR_API_KEY';

    return async (dispatch: any) => {
        try {
            dispatch({ type: FETCH_COORDS_START });

            // const fetchCoordsQuery = {
            //     email: username,
            //     password: password,
            //     projectId: projectId
            // } as LoginRequest

            //const response = await axios.post(`/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${googleApiKey}`); //, loginQuery);
            const response = await axios.post(
                `/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA5t-Tzbxos16xJy5BxinKYLtWxG6Wsdig`,
            ); //, loginQuery);

            if (response.status === 200) {
                setTimeout(() => {
                    dispatch({ type: FETCH_COORDS_SUCCESS, payload: { ...response.data } });
                }, 900);
            } else {
                dispatch({ type: FETCH_COORDS_ERROR, payload: { message: 'Error occurred!' } });
            }
            //console.error(response);
        } catch (error) {
            dispatch({
                type: FETCH_COORDS_ERROR,
                payload: { message: 'Was not able to fetch coords. Please try again.' },
            });
            console.error('Coords error: ' + error);
        }
    };
};

export const addressActions = { fetchCoordsByAddress };
