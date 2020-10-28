import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import history from './src/utils/history'
import App from './src/App'

const Index = () => {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
