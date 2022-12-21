import { DELETE_ACTION } from "../actions/delete";
import { initialState } from "../initialState";

export const deleteHuman = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_ACTION: {
			return action.value_2;
		}
		default:
			return state;
	}
};
