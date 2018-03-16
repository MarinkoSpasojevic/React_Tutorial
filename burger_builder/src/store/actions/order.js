import * as actionTypes from './actionsTypes';
import axios from '../../Axios/axios';

const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        order: orderData
    }
}

const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purcahseBurgerStart = (orderData) => {
    return (dispatch) => {
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = () => {
    return (dispatch) => {
        axios.get('/orders.json')
            .then(response => {
                let fetchOrders = [];

                for (let key in response.data) {
                    fetchOrders.push({ ...response.data[key], id: key });
                }

                dispatch(fetchOrdersSuccess(fetchOrders));
            })
            .catch(error => {
                dispatch(fetchOrdersFail(error));
            });
    }
}