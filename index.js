import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { RelayEnvironmentProvider } from 'react-relay/hooks'

import history from './src/utils/history'
import App from './src/App'
import store from './src/store'
import PortalProvider from './src/providers/PortalProvider'
import ShortcutsProvider from './src/providers/ShortcutsProvider'
import RelayEnvironment from './src/RelayEnvironment'

const Index = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Router history={history}>
        <Provider store={store}>
          <PortalProvider>
            <ShortcutsProvider>
              <App />
            </ShortcutsProvider>
          </PortalProvider>
        </Provider>
      </Router>
    </RelayEnvironmentProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
