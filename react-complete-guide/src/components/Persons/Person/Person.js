import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.person}>
            <p onClick={ props.click } className={props.classNames}>I am  { props.name } and I am { props.age } years old.</p>
            <p>{ props.children }</p>
            <p>{ props.other }</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>

    );
}

export default person;