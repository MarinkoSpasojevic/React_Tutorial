import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) //this Object.keys just extract the keys from the object to the array
        .map((ingKey, index) => {
            return [...Array(props.ingredients[ingKey])]
            .map((_, ind) => {
                return <BurgerIngredient type={ingKey} key={ingKey + ind} />
            });
        }).reduce((arr, el) => {   //fancy way of placing values from all the arrays to one array
            return arr.concat(el);
        }, []);

        if(!transformedIngredients.length){
            transformedIngredients = <p>Please start adding ingredients</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;