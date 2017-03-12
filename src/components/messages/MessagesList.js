import React, { Component } from "react"
import { connect } from "react-redux"

import Message from "./Message"

class MessagesList extends Component {
	
	renderMessage(message, index) {
		return (
			<Message data={message} key={index} />
		)
	}
	
	render() {
		return (
			<div className="messages-list">
				{
					this.props.messages.map(this.renderMessage)
				}
			</div>
		)
	}
}

export default connect(state => ({
	messages: state.get("messages"),
}))(MessagesList)