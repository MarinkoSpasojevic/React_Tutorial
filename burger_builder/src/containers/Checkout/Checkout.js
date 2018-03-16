import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        let renderView = null;
        if (Object.keys(this.props.ings).length === 0) {
            renderView = <Redirect to={'/'} />
        }
        else {
            const purchaseRedirect = this.props.purchased ? <Redirect to={'/'} /> : null;

            renderView = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummary ingredients={this.props.ings} checkoutCancelled={this.checkoutCancelled}
                        checkoutContinued={this.checkoutContinued} />
                    <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
                </div>
            )
        }

        return renderView;
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);