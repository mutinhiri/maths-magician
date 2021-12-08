import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';

const App = () => (
  <Router>
    <header className='header'>
      <h1>Math Magician</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </header>
  
    <div className="App">
      <Calculator />
    </div>

  </Router>
);

export default App;
