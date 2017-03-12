import React, { Component } from "react"

import MessagesList from "./messages/MessagesList"
import Input from "./input/Input"

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="header">Dialog system</h1>
				<MessagesList/>
				<Input/>
			</div>
		)
	}
}

export default App