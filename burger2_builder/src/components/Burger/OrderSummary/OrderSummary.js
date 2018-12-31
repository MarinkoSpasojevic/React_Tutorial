import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(key => {
        return (<li key={key}>
                    <span style={{textTransform: "capitalize"}}>{key}</span>: {props.ingredients[key]}
                </li>)
    })
    return ( 
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button buttonType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
     );
}
 
export default orderSummary;