import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    orders: [],
    purchased: false
}

const executePurchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    }
    return {
        ...initialState,
        orders: state.orders.concat(newOrder),
        purchased: true
    };
}

const executePurchaseInit = (state, action) =>{
    return {
        ...state,
        purchased: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return executePurchaseBurgerSuccess(state, action);

        case actionTypes.PURCHASE_BURGER_FAIL:
            console.log(action.error);
            break;

        case actionTypes.PURCHASE_INIT:
           return executePurchaseInit(state, action);

        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state
            }

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders
            }

        case actionTypes.FETCH_ORDERS_FAIL:
            console.log(action.error);
            break;
            
        default:
            return state;
    }
}

export default reducer;