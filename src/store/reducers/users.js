import {
	USER_DELETE_ACTION,
	USER_ADD_ACTION,
	USER_FAVOURITE_ACTION,
	USERS_SORT_BY_NUMBER_ASC,
	USERS_SORT_BY_NUMBER_DESC,
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
			console.log(action);
			const newUser = {
				id: action.user.id,
				name: action.user.name,
				surname: action.user.surname,
				age: action.user.age,
				profession: action.user.profession,
				email: action.user.email,
				phone: action.user.phone,
				avatar: action.user.avatar,
				city: action.user.city,
				skills: action.user.skills,
				socials: action.user.socials,
			};
			newState.push(newUser);
			return newState;
		}
		case USER_FAVOURITE_ACTION: {
			const [...newState] = state;
			const index = state.findIndex((_, id) => id === action.id);
			newState[index].friend = !action.friend;
			return newState;
		}
		case USERS_SORT_BY_NUMBER_ASC: {
			console.log(action);
			const [...newState] = action.users;
			return newState;
		}
		case USERS_SORT_BY_NUMBER_DESC: {
			console.log(action);
			const [...newState] = action.users;
			return newState;
		}
		default:
			return state;
	}
};
