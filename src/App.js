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
    <header className="header">
      <h1>Math Magician</h1>
      <ul className="navigation">
        <li><a href="home">Home</a></li>
        <li><a href="calculator">Calculator</a></li>
        <li><a href="quote">Quote</a></li>
      </ul>
    </header>
    <div className="App">
      <Routes>
        <Route path="/" element={<h2> Homepage</h2>} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<h1>Welcome to the quote page</h1>} />
      </Routes>
    </div>

  </Router>
);

export default App;
