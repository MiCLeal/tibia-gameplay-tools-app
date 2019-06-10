import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.timer = {
      dafault: 15,
      actual: null,
      userDefined: null
    }

    this.handlerInputChange = this.handlerInputChange.bind(this)
  }

  handlerInputChange(evt) {
    function timer(timeInSecods, milisecondsMultiplier) {

    }
  }

  render() {
    return (
      <div id="Timer-Component" className="App container-fluid Timer">
        <h1>Time to Rune</h1>
        <div className="Timer-Container">
          <input type="number" placeholder="Time in seconds" onChange={(evt) => this.handlerInputChange(evt)} />
          <div>{this.timer.actual}</div>
        </div>
      </div>
    )
  }
}

export default Timer