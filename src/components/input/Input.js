import React, { Component } from "react"
import { connect } from "react-redux"

import { sendMessage } from "../../store/actions"

class Input extends Component {
	
	constructor() {
		super()
		
		this.state = {
			value: "",
		}
		
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}
	
	handleChange(e) {
		const value = e.target.value
		
		this.setState({
			value,
		})
	}
	
	handleKeyPress(e) {
		if (e.key === 'Enter') {
			this.props.dispatch(sendMessage(this.state.value))
			this.setState({
				value: "",
			})
		}
	}
	
	render() {
		return (
			<div className="message-input-wrapper">
				<input
					type="text"
					name="message-input"
				  className="message-input"
				  value={this.state.value}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
			</div>
		)
	}
}

export default connect()(Input)