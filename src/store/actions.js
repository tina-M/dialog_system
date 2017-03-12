import Message, { REQUEST, RESPONSE } from "../containers/Message"

export const sendMessage = (message) => {
	return dispatch => {
		
		const requestMessage = new Message({
			type: REQUEST,
			value: message,
		})
		dispatch({
			type: "START_LOADING",
		})
		dispatch({
			type: "ADD_MESSAGE",
			message: requestMessage,
		})
		
		fetch("./message")
			.then(res => res.json())
			.then(json => {
				if (json.status === "success") {
					
					const responseMessage = new Message({
						type: RESPONSE,
						value: json.message,
					})
					
					dispatch({
						type: "STOP_LOADING",
					})
					dispatch({
						type: "ADD_MESSAGE",
						message: responseMessage,
					})
				}
			})
	}
}