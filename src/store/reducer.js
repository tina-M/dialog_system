import { Map, List } from "immutable"

const initState = Map({
	messages: List(),
	loading: false,
})

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
			return state.set("messages", state.get("messages").push(action.message))
		case "START_LOADING":
			return state.set("loading", true)
		case "STOP_LOADING":
			return state.set("loading", false)
		default:
			return state
	}
}

export default reducer