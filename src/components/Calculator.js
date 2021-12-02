import React from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: null,
        next: null,
        operation: null
      },
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  buttonClick(buttonName){
    this.setState((state) => ({
      data: calculate(state.data, buttonName)
    }))
  }

  render() {
    const {data} = this.state
    return (
      <div className="calculator">
        <div className="root">
          0

        </div>
        <button type="button"> AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operator-button">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="operator-button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator-button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator-button">+</button>
        <button type="button" className="double">0</button>
        <button type="button">.</button>
        <button className="operator-button" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
