import { ACTION_1 } from "../actions/action_1";
import { initialState } from "../initialState";

export const value_1 = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_1: {
			return action.value_1;
		}
		default:
			return state;
	}
};
