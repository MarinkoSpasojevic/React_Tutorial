import React from 'react';
import Person from './Person/Person';
import classes from './Persons.css';

const selectClasses = (person) => {
    let classArray = [];
    if (person.age > 33) {
        classArray.push(classes.red);
    }
    else if (person.age < 33 && person.age > 28) {
        classArray.push(classes.green);
    }
    else {
        classArray.push(classes.bold);
        classArray.push(classes.italic);
    }

    return classArray.join(' ');
}

const persons = (props) => {
    return (
        props.persons.map((person, index) => {

            return <Person name={person.name} age={person.age}
                click={props.deletePerson.bind(this, index)} key={person.id}
                change={props.changeName.bind(this, person.id)}
                classNames={selectClasses(person)} />
        })
    );
}

export default persons;