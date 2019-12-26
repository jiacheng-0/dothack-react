import React from 'react';
import logo from './logo.svg';

import HelloWorldComponent from './components/HelloWorldComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorldComponent />
      </header>
    </div>
  );
}

export default App;
