import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import Calc from './CalcView'
import Main from './MainView'
import Timer from './Timer'
import WasteAndProfit from './WasteAndProfitView'

class ViewManager extends Component {
  static Views() {
    return {
      App: <App />,
      Calc: <Calc />,
      Main: <Main />,
      Timer: <Timer />,
      WasteAndProfit: <WasteAndProfit />
    }
  }

  static View(props) {
    let name = props.location.search.substr(1)
    let view = ViewManager.Views()[name]
    if (view == null)
      throw new Error("View '" + name + "' is undefined")
    return view
  }

  render() {
    return (
      <Router>
        <div className="ViewManager">
          <Route path='/' component={ViewManager.View} />
        </div>
      </Router>
    )
  }
}

export default ViewManager