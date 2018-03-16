import * as actionTypes from './actionsTypes';
import axios from '../../Axios/axios';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

const setIngredients = (ingredients, props) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
        props: props
    }
}

const fetchIngredientsFailed = (error) =>{
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
        error: error
    }
}

export const initIngredients = (url, props) => {
    return (dispatch) => {
        axios.get(url)
            .then(response => {
                dispatch(setIngredients(response.data, props));
            }).catch(error => {
                dispatch(fetchIngredientsFailed(error));
            });
    }
}