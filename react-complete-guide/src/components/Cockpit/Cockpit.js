import React from 'react';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
    return (
        <Aux>
            <h1>{props.title}</h1>
            {/* <button onClick={this.switchState.bind(this, "Jovan", 29)}>Switch button</button> */}
            <button className={props.buttonClass} onClick={props.togglePerson}>Toggle persons</button>
        </Aux>
    );
}

export default cockpit;