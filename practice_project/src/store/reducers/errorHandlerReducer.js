import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    showErrorModal: false,
    errorMessage: ''
}

const execute404 = (state, action) => {
    action.props.history.push('/404');
    return {...state}
}

const execute500 = (state, action) => {
    action.props.history.push('/500');
    return {...state}
}

const executeOtherError = (state, action) => {
    return {
        ...state,
        showErrorModal: true,
        errorMessage: action.error.response.data
    }
}

const executeReducer = (state, action) => {
    const execute = {
        [actionTypes.HTTP_404_ERROR]: execute404(state, action),
        [actionTypes.HTTP_500_ERROR]: execute500(state, action),
        [actionTypes.HTTP_OTHER_ERROR]: executeOtherError(state, action),
        'default': state
    }

    return execute[action.type] || execute['default'];
}

const reducer = (state = initialState, action) => {
   return action.props ? executeReducer(state, action) : null;
}

export default reducer;