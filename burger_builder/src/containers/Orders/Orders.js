import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import * as orderActions from '../../store/actions/order';
import { connect } from 'react-redux';

class Orders extends Component{

    componentDidMount() {
        this.props.onFetchOrders();
    }
    render(){
        let orders = (
            this.props.orders.map(order => {
                return <Order key={order.id} ingredients={order.ingredients} totalPrice={+order.totalPrice}/>
            })
        )
        return(
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(orderActions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Orders);