import React from 'react'
import ReactDOM from 'react-dom'
import './shared/assets/dists/less/app.less'
import App from '../src/app/modules/App'
import { BrowserRouter, browserHistory } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>,
  document.getElementById('app')
)