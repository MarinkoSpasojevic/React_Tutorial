import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let errorMessage = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        errorMessage = (<em>Please enter a valid {props.valueType} value!!!</em>);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}>
                    <option value="">Choose an export type</option>
                    {
                        props.elementConfig.options.map(opt => {
                            return <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                        })
                    }
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} value={props.value}/>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {errorMessage}
        </div>
        )
    }
    
export default input;