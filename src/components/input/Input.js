import React, { Component } from "react"

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
			console.log('do validate');
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

export default Input