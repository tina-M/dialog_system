import Immutable from "immutable"
import installDevTools from "immutable-devtools"
installDevTools(Immutable)

import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { createStore } from "redux"

import reducer from "./store/reducer"

import App from "./components/App"

const store = createStore(
	reducer,
)

// Debug
window.store = store

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)