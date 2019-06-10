import React, { Component } from 'react'
let nextComp

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calc: false,
      waste: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(evt) {

  }

  render() {
    return (
      <div id="Main" className="container">
        <h1>This is Tibia Tools App</h1>
        <div className="jumbotron">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-tools" onClick={this.clickHandler()}>Calc</button>
            </div>
            <div className="col-6">
              <button className="btn btn-tools">Waste And Profit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main