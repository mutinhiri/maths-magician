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
        <Route
          path="/home"
          element={(
            <div className=" App homepage-container">
              <h1>Homepage</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                At quas sit architecto explicabo? A repellendus, nihil expedita
                sint magnam dolores.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Error, officiis cumque dolorum odit saepe rerum corporis,
                aliquam a similique quisquam enim numquam esse laudantium
                asperiores, est deserunt eos molestiae neque!
              </p>
            </div>
            )}
        />
        <Route
          path="/calculator"
          element={(
            <div className="App calculator-container">
              <h3>Lets do some maths</h3>
              <Calculator />
            </div>

                                          )}
        />
        <Route
          path="/quote"
          element={(
            <div className="App quote-container">
              <h3>
                The best programmers are not marginally better than merely good ones.
                They are an order-of-magnitude better, measured by whatever standard:
                conceptual creativity, speed, ingenuity of design, or problem-solving ability.
                Randall E. Stross
              </h3>

            </div>
                                        )}
        />
      </Routes>
    </div>

  </Router>
);

export default App;
