import {combineReducers} from 'redux';
import storedResultsReducer from './reducers/storedResultsReducer';
import calcReducer from './reducers/calcReducer';


const reducers = combineReducers({
    calc: calcReducer,
    storedResults: storedResultsReducer
})

export default reducers;