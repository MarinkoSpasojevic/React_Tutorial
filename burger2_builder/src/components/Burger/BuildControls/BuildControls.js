import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className='buildControls'>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(c => (
                <BuildControl key={c.label} label={c.label} added={() => props.ingredientAdded(c.type)} removed={() => props.ingredientRemoved(c.type)}
                    ammount={props.ingredients[c.type]} />
            ))}
            <br/>
            <button className='OrderButton' disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;