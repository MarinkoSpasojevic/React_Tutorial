import * as actionTypes from '../actionTypes/actionTypes';
import axios from '../../Axios/axios';
import * as errorHandlerActions from '../actions/errorHandlerActions';

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) => {
    return (dispatch) => {
        axios.get(url)
        .then(res => {
            dispatch(getDataSuccess(res.data));
        })
        .catch(err => {
            dispatch(errorHandlerActions.handleHttpError(err, props));
        })
    }
}

const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        data: response
    }
}

export const postData = (url, obj, props) => {
    return (dispatch) => {
        axios.post(url, obj)
        .then(res => {
            dispatch(postDataSuccess(res));
        })
        .catch(err => {
            dispatch(errorHandlerActions.handleHttpError(err, props));
        })
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}
 
export const putData = (url, obj, props) => {
    return (dispatch) => {
        axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response));
        })
        .catch(err => {
            dispatch(errorHandlerActions.handleHttpError(err, props));            
        })
    }
}
 
const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
 
export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(err => {
            dispatch(errorHandlerActions.handleHttpError(err, props));            
        })
    }
}
