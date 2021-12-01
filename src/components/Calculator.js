import React from "react";

import './Calculator.css' ;

class Calculator extends React.Component {
  render(){
    return (
      <div className = 'calculator'>
        <div className = 'root'>
          0

        </div>
        <button type= 'button'> AC</button>
        <button type= 'button'>+/-</button>
        <button type= 'button'>%</button>
        <button type ="button" className="operator-button">÷</button>
        <button type= "button">7</button>
        <button type="button">8</button>
        <button type= "button">9</button>
        <button type= "button" className="operator-button">x</button>
        <button type= 'button'>4</button>
      </div>
    )
  }

}

