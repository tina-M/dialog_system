import React, { Component } from "react"
import { connect } from "react-redux"

import { sendMessage } from "../../store/actions"

class Input extends Component {
	
	constructor() {
		super()
		
		this.state = {
			value: "",
		}
		
		this.input = null
		
		this.setInput = this.setInput.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
	}
	
	componentDidMount() {
		this.input.focus()
	}
	
	setInput(input) {
		this.input = input
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
				  placeholder="Send message"
				  value={this.state.value}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					ref={this.setInput}
				/>
			</div>
		)
	}
}

export default connect()(Input)