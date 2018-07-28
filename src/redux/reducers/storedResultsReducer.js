import * as storedResultsActions from '../storedResultsActions';

const INITIAL_STATE = {
    results: []
};

function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case storedResultsActions.SAVE:
            let results = [...state.results];
            results.push(action.payload.total);
            return {
                ...state,
                results
            };
        case storedResultsActions.DELETE:
            results = [...state.results];
            results.splice(action.payload.position, 1);
            return {
                ...state,
                results
            }
        default:
            return state;
    }
}

export default reducer;