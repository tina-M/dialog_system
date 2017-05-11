import './main.scss'

import Immutable from "immutable"
import installDevTools from "immutable-devtools"
installDevTools(Immutable)

import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from "./store/reducer"
import { API_URL } from "./constants"

import App from "./components/App"

fetch(API_URL + "?clean=1")
  .then(() => {
    const loggerMiddleware = createLogger()
  
    const store = createStore(
      reducer,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
      ),
    )

    // Debug
    window.store = store
  
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("app")
    )
  })
