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
      </div>
    )
  }

}

