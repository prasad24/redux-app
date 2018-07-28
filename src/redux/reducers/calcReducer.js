import * as calcActions from '../calcActions';

const INITIAL_STATE = {
    total: 0
};

function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case calcActions.ADD:
            let newTotal = +action.payload.number1 + +action.payload.number2;
            return {
                ...state,
                total: newTotal
            }
        case calcActions.SUBTRACT:
            newTotal = action.payload.number1 - action.payload.number2;
            return {
                ...state,
                total: newTotal
            }
        case calcActions.DIVIDE:
            newTotal = action.payload.number1 / action.payload.number2;
            return {
                ...state,
                total: newTotal
            }
        case calcActions.MULTIPLY:
            newTotal = action.payload.number1 * action.payload.number2;
            return {
                ...state,
                total: newTotal
            }
        default:
            return state;
    }
}

export default reducer;