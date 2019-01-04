import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
    data: null,
    showSuccessModal: false
}

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    }
}

const executePostDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executePutDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executeDeleteDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const execute = {
    [actionTypes.GET_DATA_SUCCESS]: executeGetDataSuccess,
    [actionTypes.POST_DATA_SUCCESS]: executePostDataSuccess,
    [actionTypes.PUT_DATA_SUCCESS]: executePutDataSuccess,
    [actionTypes.DELETE_DATA_SUCCESS]: executeDeleteDataSuccess
}

const reducer = (state = initialState, action) => {
    return execute[action.type] ? execute[action.type](state, action) : state;
}

export default reducer;