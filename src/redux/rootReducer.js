import {combineReducers} from 'redux';
import resultReducer from './reducers/resultReducer';
import calcReducer from './reducers/calcReducer';


const reducers = combineReducers({
    calc: calcReducer,
    result: resultReducer
})

export default reducers;