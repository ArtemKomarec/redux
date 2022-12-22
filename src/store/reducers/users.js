import {
	USER_DELETE_ACTION,
	USER_ADD_ACTION,
	USER_FAVOURITE_ACTION,
} from "../actions/users";
import { initialState } from "../initialState";

export const users = (state = initialState, action) => {
	switch (action.type) {
		case USER_DELETE_ACTION: {
			const [...newState] = state;
			const index = state.findIndex((_, id) => id === action.id);
			newState.splice(index, 1);
			return newState;
		}
		case USER_ADD_ACTION: {
			const [...newState] = state;
			newState.push(action.user);
			return newState;
		}
		case USER_FAVOURITE_ACTION: {
			const [...newState] = state;
			const index = state.findIndex((_, id) => id === action.id);
			newState[index].friend = !action.friend;
			return newState;
		}
		default:
			return state;
	}
};
