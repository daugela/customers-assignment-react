import customersDataReducer from './customerData.reducer';
import modalsReducer from './modals.reducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    //customersDataReducer: persistReducer(customersDataPersistConfig, customersDataReducer),
    customersDataReducer: customersDataReducer,
    modalsReducer: modalsReducer,
});

export default rootReducer;
