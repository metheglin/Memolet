import React, { Component } from 'react'
import {Text} from 'react-native'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './stores/configure-store'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
