import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliaru/Auxiliaru';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../Axios/axios';

const ingredientPrice = {
    salad: 0.4,
    bacon: 0.8,
    cheese: 0.6,
    meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {},
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            }).catch(error => {
                console.log(error);
            });

    }

    addIngredient = (type) => {
        let newIngredients = { ...this.state.ingredients };
        let newTotal = this.state.totalPrice;

        newIngredients[type] = newIngredients[type] + 1;
        newTotal = newTotal + ingredientPrice[type];

        this.setState({ ingredients: newIngredients, totalPrice: newTotal });
        this.updatePurchaseState(newIngredients); //we need to pass newIngredients due to the async nature of setState method.
    }

    removeIngredient = (type) => {
        if (this.state.ingredients[type] > 0) {
            let newIngredients = { ...this.state.ingredients };
            let newTotal = this.state.totalPrice;

            newIngredients[type] = newIngredients[type] - 1;
            newTotal = newTotal - ingredientPrice[type];

            this.setState({ ingredients: newIngredients, totalPrice: newTotal });
            this.updatePurchaseState(newIngredients);
        }
    }

    shoudDisableButton = () => {
        let ingredients = { ...this.state.ingredients };
        for (let key in ingredients) {
            ingredients[key] = ingredients[key] <= 0;
        }

        return ingredients;
    }

    updatePurchaseState = (ingredients) => {
        let sum = 0;

        Object.keys(ingredients).map((ingKey) => {
            return sum = sum + ingredients[ingKey];
        })

        this.setState({ purchasable: sum > 0 })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancel = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinue = () => {
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('totalPrice=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} closeOrder={this.purchaseCancel} >
                    <OrderSummary ingredients={this.state.ingredients}
                        closeOrder={this.purchaseCancel} continueOrder={this.purchaseContinue}
                        totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    disable={this.shoudDisableButton()} price={this.state.totalPrice}
                    purchasable={this.state.purchasable} ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;