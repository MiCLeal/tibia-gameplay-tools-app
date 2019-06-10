import React, { Component } from 'react'
import './App.css'
import './styles/index.css'
import 'jquery/dist/jquery.slim'
import Area from './Area'
import Logo from './logo.png'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="Main" className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tibia Tools</h1>
        </header>
        <Area />
      </div>
    )
  }
}

export default App
//<button className="btn btn-tools">Calc</button>
//        <button className="btn btn-tools">Guild</button>
//      <button className="btn btn-tools">Char</button>