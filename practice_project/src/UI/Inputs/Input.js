import React from 'react';
import Aux from '../../hoc/auxiliary';
import './Input.css';
import { FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const input = (props) => {
    let errorMessage = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        errorMessage = (<em>{props.errorMessage}</em>)
    }

    let inputField = {
        'input': (
            <FormGroup controlId={props.id}>
                <Col componentClass={ControlLabel} sm={2}>
                    {props.label}
                </Col>
                <Col sm={6}>
                    <FormControl type={props.type} value={props.value} onChange={props.changed} onBlur={props.blur} />
                </Col>
                <Col>
                    <em>{errorMessage}</em>
                </Col>
            </FormGroup>
        ),
        'datePicker': (
            <FormGroup controlId={props.id}>
                <Col componentClass={ControlLabel} sm={2}>
                    {props.label}
                </Col>
                <Col sm={6}>
                    <DatePicker selected={props.value} dateFormat="MM/DD/YYYY"
                        onChange={props.changed} className='datePickerControl'
                        showYearDropdown dropdownMode="select" readOnly />
                </Col>
                <Col>
                    <em>{errorMessage}</em>
                </Col>
            </FormGroup>
        ),
        'default': null
    };

    return (
        <Aux>
            {inputField[props.elementType]} 
        </Aux>
    );
}

export default input;