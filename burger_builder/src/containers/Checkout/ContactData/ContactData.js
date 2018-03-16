import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as orderActions from '../../../store/actions/order';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input', elementConfig: { type: 'text', placeholder: 'Your Name' }, value: '', validation: { required: true }, 
                valid: false, touched: false
            },
            email: {
                elementType: 'input', elementConfig: { type: 'email', placeholder: 'Your Email' }, value: '', validation: { required: true }, 
                valid: false, touched: false
            },
            street: {
                elementType: 'input', elementConfig: { type: 'text', placeholder: 'Your Street' }, value: '', validation: { required: true }, 
                valid: false, touched: false
            },
            country: {
                elementType: 'input', elementConfig: { type: 'text', placeholder: 'Your Country' }, value: '', valid: true
            },
            postalCode: {
                elementType: 'input', elementConfig: { type: 'text', placeholder: 'Zip Code' }, value: '',
                validation: { required: true, minLength: 5, maxLength: 5 }, valid: false, touched: false
            },
            deliveryMethod: {
                elementType: 'select', elementConfig: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' }, { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: '', validation: { required: true }, valid: false, touched: false
            }
        },
        isFormValid: false
    }

    checkValidity = (value, validation) => {
        let isValid = false;

        if (validation){
            if  (validation.required) {
                isValid = value.trim() !== '';
            }
    
            if  (validation.minLength) {
                isValid = value.length >= validation.minLength;
            }
    
            if (isValid && validation.maxLength) {
                isValid = value.length <= validation.maxLength;
            }

            return isValid;
        }

        return true;
    }

    orderHandler = (event) => {
        event.preventDefault();

        const formData = {}
        Object.keys(this.state.orderForm).map(element => {
            return formData[element] = this.state.orderForm[element].value;
        });
        let order = {
            orderData: formData,
            ingredients: this.props.ings,
            totalPrice: this.props.totalPrice.toFixed(2)
        }

        this.props.onOrderBurger(order);
    }

    convertStateToArrayOfFormObjects = () => {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        return formElementsArray;
    }

    inputChangedHandler = (event, identifyer) => {
        const updatedOrderForm = { ...this.state.orderForm };
        const updatedFormElement = { ...updatedOrderForm[identifyer] };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[identifyer] = updatedFormElement;

        let countInvalidElements = 0;
        for(let element in updatedOrderForm){
            if(!updatedOrderForm[element].valid){
                countInvalidElements = countInvalidElements + 1;
                break;
            }
        }

        this.setState({ orderForm: updatedOrderForm, isFormValid: countInvalidElements === 0 });
    }

    render() {
        const formElementsArray = this.convertStateToArrayOfFormObjects();

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={this.orderHandler}>
                    {
                        formElementsArray.map(element => {
                            return <Input key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                changed={(event) => this.inputChangedHandler(event, element.id)}
                                invalid={!element.config.valid}
                                shouldValidate={element.config.validation}
                                touched={element.config.touched}
                                valueType={element.id} />
                        })
                    }
                    <Button buttonType="Success" disabled={!this.state.isFormValid}>ORDER</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOrderBurger: (orderData) => dispatch(orderActions.purcahseBurgerStart(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);