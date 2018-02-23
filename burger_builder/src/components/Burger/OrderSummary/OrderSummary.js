import React from 'react';
import classes from './OrderSummary.css';
import Aux from '../../../hoc/Auxiliaru';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    let ingSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span className={classes.AllCaps}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        })

    return (
        <Aux>
            <h3>Your order:</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingSummary}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button buttonType={'Danger'} clicked={props.closeOrder}>CANCEL</Button>
            <Button buttonType={'Success'} clicked={props.continueOrder}>SUCCESS</Button>
        </Aux>
    );
}

export default orderSummary;