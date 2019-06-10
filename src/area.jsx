import React, { Component } from 'react'
//import Views, { Main, Calc, WasteAndProfit } from './Views/Views'
import Calc from './Views/CalcView'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import './App.css'
import './styles/index.css'


class Area extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App-renderer-area container">
        <div className="Real-renderer">
          <Calc />
        </div>
      </div>
    )
  }
}

export default Area