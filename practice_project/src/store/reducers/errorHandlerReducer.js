import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    showErrorModal: false,
    errorMessage: ''
}

const execute404 = (state, action) => {
    action.props.history.push('/404');
    return { ...state }
}

const execute500 = (state, action) => {
    action.props.history.push('/500');
    return { ...state }
}

const executeOtherError = (state, action) => {
    return {
        ...state,
        showErrorModal: true,
        errorMessage: action.error.response.data
    }
}

const execute = {
    [actionTypes.HTTP_404_ERROR]: execute404,
    [actionTypes.HTTP_500_ERROR]: execute500,
    [actionTypes.HTTP_OTHER_ERROR]: executeOtherError
}

const reducer = (state = initialState, action) => {
    return execute[action.type] ? execute[action.type](state, action) : state;
}

export default reducer;