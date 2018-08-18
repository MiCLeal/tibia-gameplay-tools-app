import React, { Component } from 'react';
import './App.css';
import './styles/index.css';

class Area extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actualLevel: null,
            minLevel: null / 0.666,
            maxLevel: null * 0.666
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt) {
        function round(value, precision) {
            var multiplier = Math.pow(10, precision || 0)
            return Math.round(value * multiplier) / multiplier;
        }
            this.setState({
                actualLevel: evt.target.value,
                minLevel: round(evt.target.value * .666),
                maxLevel: round(evt.target.value / .666)
            });
    }

    render() {
        return (
            <div className="App-renderer-area container">
                <h1>Share Exp. Calc.</h1>
                <div className="Real-renderer">
                    <form className="form">
                        <input className="App form-control" type="textbox" value={this.state.actualLevel} onChange={(evt) => this.handleInputChange(evt)} placeholder="Your level" />
                        <br/>
                    </form>
                    <div className="row">
                        <div className="col-6">
                            <h3>Min. Level</h3>
                            <h2>{this.state.minLevel}</h2>
                        </div>
                        <div className="col-6">
                            <h3>Max. level</h3>
                            <h2>{this.state.maxLevel}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Area;