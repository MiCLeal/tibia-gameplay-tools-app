import React, { Component } from 'react';
import Calc from './Calc'
import 'jquery/dist/jquery.slim'
import 'popper.js';
import './App.css';
import './styles/index.css';

class Area extends Component {
  constructor(props) {
    super(props)
    this.tools = {
      calc: <Calc />,
      guilds: null,
      char: null,
      selectedTool: <Calc />
    }
  }
    render() {
        return (
            <div className="App-renderer-area container">
                <h1>Share Exp. Calc.</h1>
                <div className="Real-renderer">
                  {this.tools.selectedTool}
                </div>

            </div>
        )
    }
}

export default Area;