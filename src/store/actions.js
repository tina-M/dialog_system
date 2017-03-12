export const sendMessage = (message) => {
	return dispatch => {
		dispatch({
			type: "START_LOADING",
		})
		fetch("./message")
			.then(res => res.json())
			.then(json => {
				if (json.status === "success") {
					dispatch({
						type: "STOP_LOADING",
					})
					dispatch({
						type: "ADD_MESSAGE",
						message: json.message,
					})
				}
			})
	}
}