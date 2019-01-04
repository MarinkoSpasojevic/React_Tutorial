import React, { Component } from 'react';
import Input from '../../UI/Inputs/Input';
import { Form, Well, Button, FormGroup, Col } from 'react-bootstrap';
import { getInputConfiguration } from '../../Utility/InputConfiguration';
import * as formUtilityActions from '../../Utility/FormUtility';

class CreateOwner extends Component {
    state = {
        ownerForm: getInputConfiguration(),
        isFormValid: false
    }

    handleChangeEvent = (event, id) => {
        const updatedOwnerForm = { ...this.state.ownerForm };
        updatedOwnerForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedOwnerForm, id);

        const counter = formUtilityActions.countInvalidElements(updatedOwnerForm);

        this.setState({ ownerForm: updatedOwnerForm, isFormValid: counter === 0 })
    }

    render() {
        const formElementsArray = formUtilityActions.convertStateToFormObjectArray({ ...this.state.ownerForm });
        return (
            <Well>
                <Form horizontal onSubmit={this.createOwner}>
                    {
                        formElementsArray.map(element => {
                            return <Input key={element.id} elementType={element.config.element}
                                id={element.id} label={element.config.label}
                                type={element.config.type} value={element.config.value}
                                changed={(event) => this.handleChangeEvent(event, element.id)}
                                errorMessage={element.config.errorMessage}
                                invalid={!element.config.valid} shouldValidate={element.config.validation}
                                touched={element.config.touched}
                                blur={(event) => this.handleChangeEvent(event, element.id)} />
                        })
                    }
                    <br />
                    <FormGroup>
                        <Col mdOffset={6} md={1}>
                            <Button type='submit' bsStyle='info' disabled={!this.state.isFormValid}>Create</Button>
                        </Col>
                        <Col md={1}>
                            <Button bsStyle='danger' onClick={this.redirectToOwnerList}>Cancel</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Well>

        );
    }
}

export default CreateOwner;