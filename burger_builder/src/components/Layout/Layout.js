import React from 'react';
import Aux from '../../hoc/Auxiliaru';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;