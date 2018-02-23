import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliaru';
import BackDrop from '../Backdrop/Backdrop';

const renderClasses = (show) => {
    let classesArray = [];
    if (show) {
        classesArray.push(classes.Modal, classes.ShowModal);
    }
    else {
        classesArray.push(classes.Modal, classes.HideModal);
    }

    return classesArray.join(' ');
}

const modal = (props) => {
    let modalClasses = renderClasses(props.show);
    return (
        <Aux>
            <BackDrop show={props.show} closeOrder={props.closeOrder}/>
            <div className={modalClasses}>
                {props.children}
            </div>
        </Aux>
    );
}

export default modal;