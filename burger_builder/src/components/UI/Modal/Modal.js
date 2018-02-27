import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliaru/Auxiliaru';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {
    renderClasses = (show) => {
        let classesArray = [];
        if (show) {
            classesArray.push(classes.Modal, classes.ShowModal);
        }
        else {
            classesArray.push(classes.Modal, classes.HideModal);
        }

        return classesArray.join(' ');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('Modal will update');
    }

    render() {
        let modalClasses = this.renderClasses(this.props.show);

        return (
            <Aux>
                <BackDrop show={this.props.show} closeOrder={this.props.closeOrder} />
                <div className={modalClasses}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;