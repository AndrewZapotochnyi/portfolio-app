import React from 'react';
import logo from './styles/images/Apple_Logo.png';
import './App.css';
import './styles/_colors.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, that's where the file is: src/App.js.
        </p>
        
      </header>
    </div>
  );
}

export default App;
