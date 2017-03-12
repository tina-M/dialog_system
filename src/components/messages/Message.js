import React, { Component } from "react"

class Message extends Component {
	render() {
		const { data } = this.props
		return (
			<div className={`${data.getClass()} message`}>
				<div className="content">
					{data.value}
				</div>
			</div>
		)
	}
}

export default Message