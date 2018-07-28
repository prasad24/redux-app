import React, {Component} from 'react';
import './Calculator.css';
import {connect} from  'react-redux';
import * as calcActions from '../../redux/calcActions';
import * as storedResultsActions from '../../redux/storedResultsActions';

class Calculator extends Component {
    state = {
        buttonDisabled: true,
        number1: '',
        number2: ''
    }

    handleChange(event) {
        let {number1, number2, buttonDisabled} = this.state;
        if(number1 > 0 && number2 > 0) {
            buttonDisabled = false;
        }
        this.setState({
            [event.target.name] : event.target.value,
            buttonDisabled
        })
    }

    render() {
        let storedResults = this.props.storedResults.map((result, index) => <li key={index}>{result} <a onClick={() =>this.props.delete(index)}>[ Remove ]</a></li>);
        if(!storedResults.length) {
            storedResults = <div>No stored results</div>
        }
        return (
            <div className="calculator">
                <div className="inputs">
                    <div className="item"><input name="number1" type="number" value={this.state.number1} onChange={(event) => this.handleChange(event)}/></div>
                    <div className="item"><label></label></div>
                    <div className="item"><input name="number2" type="number" value={this.state.number2} onChange={(event) => this.handleChange(event)} /></div>
                    <div className="item"><label>=</label></div>
                    <div className="item"><label>{this.props.calc.total}</label></div>
                </div>
                <div className="operations">
                    <button onClick={ () => this.props.add(this.state.number1, this.state.number2)} disabled={this.state.buttonDisabled}>Add</button>
                    <button onClick={ () => this.props.subract(this.state.number1, this.state.number2)} disabled={this.state.buttonDisabled}>Subract</button>
                    <button onClick={ () => this.props.divide(this.state.number1, this.state.number2)} disabled={this.state.buttonDisabled}>Divide</button>
                    <button onClick={ () => this.props.multiply(this.state.number1, this.state.number2)} disabled={this.state.buttonDisabled}>Multiply</button>
                    <button onClick={ () => this.props.save(this.props.calc.total)} disabled={this.state.buttonDisabled}>Save Total</button>
                </div>
                <div className="results">
                    <h3>Stored Results</h3>
                    <ul>
                        {storedResults}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        calc: state.calc,
        storedResults: state.storedResults.results
    }
};

const mapActionToProps = dispatch => {
    return {
        add: (number1, number2) => dispatch({
            type:calcActions.ADD,
            payload: {
                number1: number1,
                number2: number2,
            }
        }),
        subract: (number1, number2) => dispatch({
            type:calcActions.SUBTRACT,
            payload: {
                number1: number1,
                number2: number2,
            }
        }),
        divide: (number1, number2) => dispatch({
            type:calcActions.DIVIDE,
            payload: {
                number1: number1,
                number2: number2,
            }
        }),
        multiply: (number1, number2) => dispatch({
            type:calcActions.MULTIPLY,
            payload: {
                number1: number1,
                number2: number2,
            }
        }),
        save: (total) => dispatch({
            type: storedResultsActions.SAVE,
            payload: {
                total
            }
        }),
        delete: (position) => dispatch({
            type: storedResultsActions.DELETE,
            payload: {
                position
            }
        })
    };
};

export default connect(mapStateToProps, mapActionToProps)(Calculator);