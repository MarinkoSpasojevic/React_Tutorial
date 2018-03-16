import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: {},
    totalPrice: 4
}

const ingredientPrice = {
    salad: 0.4,
    bacon: 0.8,
    cheese: 0.6,
    meat: 1.3
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + ingredientPrice[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - ingredientPrice[action.ingredientName]
            };
        case actionTypes.SET_INGREDIENTS:
            console.log(action.props);
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            console.log(action.error);
            break;
        default:
            return state;
    }

};

export default reducer;