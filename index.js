import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import history from './src/utils/history'
import App from './src/App'
import store from './src/store'

const Index = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
