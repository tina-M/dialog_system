import { Record } from 'immutable'

export const REQUEST = "REQUEST"
export const RESPONSE = "RESPONSE"

type Input = {
	value: string,
	type: REQUEST | RESPONSE | null,
}

const MessageRecord = Record({
	value: "",
	type: null,
})

class Message extends MessageRecord {
	constructor(raw: Input) {
		let input = raw
		super(input)
	}
	
	getClass() {
		return (this.type === REQUEST ? "request" : "response") + "-message"
	}
}

window.Message = Message

export default Message