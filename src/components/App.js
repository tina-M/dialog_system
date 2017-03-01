import React, { Component } from "react"

import MessagesList from "./messages/MessagesList"
import Input from "./input/Input"

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<MessagesList/>
				</div>
				<div>
					<Input/>
				</div>
			</div>
		)
	}
}

export default App