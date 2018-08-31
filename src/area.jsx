import React, { Component } from 'react';
import Calc from './Calc'
import './App.css';
import './styles/index.css';

class Area extends Component {
    render() {
        return (
            <div className="App-renderer-area container">
                <h1>Share Exp. Calc.</h1>
                <div className="Real-renderer">
                    <Calc />
                </div>
            </div>
        )
    }
}


export default Area;