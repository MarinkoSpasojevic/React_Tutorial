import * as actions from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.result, id: new Date() })
            }
        case actions.DELETE_RESULT:
        const newArray = state.results.filter(x => x.id !== action.elementId)
        return {
            ...state,
            results: newArray

        }
        default: 
            return state;   
    }
}

export default reducer;