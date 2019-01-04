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

const execute = (state, action) => {
    const executeObj = {
        [actionTypes.GET_DATA_SUCCESS]: executeGetDataSuccess(state, action),
        [actionTypes.POST_DATA_SUCCESS]: executePostDataSuccess(state, action),
        [actionTypes.PUT_DATA_SUCCESS]: executePutDataSuccess(state, action),
        [actionTypes.DELETE_DATA_SUCCESS]: executeDeleteDataSuccess(state, action),
        'default': state,
    }
    return executeObj[action.type] || executeObj['default'];
}

const reducer = (state = initialState, action) => {
    return execute(state, action);
}

export default reducer;