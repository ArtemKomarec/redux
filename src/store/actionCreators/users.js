import {
	USER_DELETE_ACTION,
	USER_ADD_ACTION,
	USER_FAVOURITE_ACTION,
} from "../actions/users";

export const userDeleteAction = (id) => {
	return {
		type: USER_DELETE_ACTION,
		id,
	};
};

export const userAddAction = (user, id) => {
	return {
		type: USER_ADD_ACTION,
		user,
	};
};

export const userFavouriteAction = (id, friend) => {
	return {
		type: USER_FAVOURITE_ACTION,
		id,
		friend,
	};
};
