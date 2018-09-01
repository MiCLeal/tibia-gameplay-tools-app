import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Area from './area';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tibia Tools</h1>
        </header>
        <Area />
      </div>
    );
  }
}

export default App;
//<button className="btn btn-tools">Calc</button>
  //        <button className="btn btn-tools">Guild</button>
    //      <button className="btn btn-tools">Char</button>