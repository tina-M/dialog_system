import React, { Component } from "react"
import { connect } from "react-redux"

import MessagesList from "./messages/MessagesList"
import Input from "./input/Input"
import Loader from "./loader/Loader"

class App extends Component {
	render() {
		return (
			<div className="app">
				<h1 className="header">Dialog system</h1>
				<div className="app-wrapper">
					<MessagesList/>
					<Input/>
					{this.props.loading ? <Loader/> : null}
				</div>
			</div>
		)
	}
}

export default connect(state => ({
  loading: state.get("loading"),
}))(App)