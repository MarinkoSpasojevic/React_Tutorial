import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients: {},
        totalPrice: 0
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            if(param[0] === 'totalPrice'){
                this.setState({totalPrice: +param[1]});
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ingredients: ingredients});
    }

    checkoutCancelled= () => {
        this.props.history.goBack();
    }

    checkoutContinued = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued} />
                 <Route path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)} />   
            </div>
        )
    }
}

export default Checkout;