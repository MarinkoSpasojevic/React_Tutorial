import React from 'react';
import classes from './Team.css';
import Button from '../../../UI/Button/Button';

const team = (props) => {
    return (
        <div className={classes.Team}>
            <p>Name of the team: {props.name}</p>
            <p>City of the team: {props.city}</p>
            <div>
                <Button class='Success'>Click me success!!!</Button>
                <Button class='Error'>Click me error!!!</Button>
            </div>
        </div>
    );
}

export default team;