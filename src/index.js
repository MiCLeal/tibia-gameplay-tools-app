import React from 'react'
import ReactDOM from 'react-dom'
import 'jquery/dist/jquery.slim'
import 'popper.js'
import './index.css'
import App from './App'
import ViewManager from './Views/ViewManager'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<ViewManager />, document.getElementById('root'))
registerServiceWorker()
