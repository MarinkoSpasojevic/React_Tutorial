import React from 'react';
import classes from './Button.css';

const button = (props) => {
    return (
        <button type="button" id="someButton" className={classes[props.class]}>{props.children}</button>
    );
}

export default button;