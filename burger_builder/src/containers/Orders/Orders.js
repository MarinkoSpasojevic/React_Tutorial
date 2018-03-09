import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../Axios/axios';

class Orders extends Component{
    state = {
        orders: []
    }
    componentDidMount() {
        axios.get('/orders.json')
        .then(response => {
            let fetchOrders = [];

            for(let key in response.data){
                fetchOrders.push({...response.data[key], id: key});
            }
             this.setState({orders: fetchOrders});
        })
        .catch(error => {
            console.log(error);
        });
    }
    render(){
        let orders = (
            this.state.orders.map(order => {
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

export default Orders;