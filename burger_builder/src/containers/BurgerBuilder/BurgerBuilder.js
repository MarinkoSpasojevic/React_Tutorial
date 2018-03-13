import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliaru/Auxiliaru';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({ ingredients: response.data });
        //     }).catch(error => {
        //         console.log(error);
        //     });

    }

    shoudDisableButton = () => {
        let ingredients = { ...this.props.ings };
        for (let key in ingredients) {
            ingredients[key] = ingredients[key] <= 0;
        }

        return ingredients;
    }

    updatePurchaseState = () => {
        let sum = 0;
        let ingredients = {...this.props.ings};
        Object.keys(ingredients).map((ingKey) => {
            return sum = sum + ingredients[ingKey];
        })

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancel = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinue = () => {
        this.props.history.push('/checkout');
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} closeOrder={this.purchaseCancel} >
                    <OrderSummary ingredients={this.props.ings}
                        closeOrder={this.purchaseCancel} continueOrder={this.purchaseContinue}
                        totalPrice={this.props.totalPrice} />
                </Modal>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    addIngredient={this.props.onIngredientAdded}
                    removeIngredient={this.props.onIngredientRemoved}
                    disable={this.shoudDisableButton()} price={this.props.totalPrice}
                    purchasable={this.updatePurchaseState()} ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);