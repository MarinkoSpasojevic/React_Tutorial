import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import WithClass from '../hoc/WithClass';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Marinko", age: 35 },
      { id: 2, name: "Marina", age: 32 },
      { id: 3, name: "Goran", age: 28 }
    ],
    other: "something other here.",
    showPersons: false,
    countToggle: 0
  }

  changeName = (id, event) => {
    let personIndex = this.state.persons.findIndex(p => p.id === id);
    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePerson = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        countToggle: prevState.countToggle + 1
      }
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let buttonClass = classes.hiddenPersons;

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} deletePerson={this.deletePerson}
        changeName={this.changeName} />

      style.backgroundColor = 'red';
      buttonClass = classes.shownPersons
    }

    return (
      <Aux>
        <Cockpit buttonClass={buttonClass} togglePerson={this.togglePerson} title={this.props.title} />
        {persons}
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
