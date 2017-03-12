import React, { Component } from "react"

class Message extends Component {
	render() {
		const { data } = this.props
		return (
			<div className={`${data.getClass()}`}>
				{data.value}
			</div>
		)
	}
}

export default Message