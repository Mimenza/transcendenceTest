import React from 'react';
import logo from './logo.svg'; // Ensure the logo is imported correctly
import './App.css';
import Test from './screens/test';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boniato TypeScript
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test />
    </div>
  );
};

export default App;