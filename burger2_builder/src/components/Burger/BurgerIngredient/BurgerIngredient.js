import React from 'react';
import './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = {
        'bread-bottom': <div className='BreadBottom'></div>,
        'bread-top': 
                <div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>,
        'meat':  <div className='Meat'></div>,
        'cheese': <div className='Cheese'></div>,
        'bacon':  <div className='Bacon'></div>,
        'salad': <div className='Salad'></div>
    };

    return (
        ingredient[props.type]
    );
}

export default burgerIngredient;