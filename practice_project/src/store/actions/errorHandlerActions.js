import * as actionTyps from '../actionTypes/actionTypes';

const execute404Handler = (props) => {
    return {
        type: actionTyps.HTTP_404_ERROR,
        props: props
    }
}

const execute500Handler = (props) => {
    return {
        type: actionTyps.HTTP_500_ERROR,
        props: props
    }
}

const executeOtherErrorHandler = (error) => {
    return {
        type: actionTyps.HTTP_OTHER_ERROR,
        error: error 
    }
}

export const handleHttpError = (error, props) => {
    if(error.response.status === 404){
        return execute404Handler(props);
    }
    else if(error.response.status === 500){
        return execute500Handler(props);
    }
    else{
        return executeOtherErrorHandler(error);
    }
}