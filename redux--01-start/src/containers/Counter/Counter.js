import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
      render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter } />
                <CounterControl label="Add 5" clicked={ this.props.onAdditionCounter } />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtractCounter } />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actions.DECREMENT }),
        onAdditionCounter: () => dispatch({ type: actions.ADD, value: 5}),
        onSubtractCounter: () => dispatch({ type: actions.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actions.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({ type: actions.DELETE_RESULT, elementId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);