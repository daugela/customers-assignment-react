import customersDataReducer from './customerData.reducer';
import modalsReducer from './modals.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    customersDataReducer: customersDataReducer,
    modalsReducer: modalsReducer,
});

export default rootReducer;
