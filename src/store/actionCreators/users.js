import {
	USER_DELETE_ACTION,
	USER_ADD_ACTION,
	USER_FAVOURITE_ACTION,
	USERS_SORT_BY_NUMBER_ASC,
	USERS_SORT_BY_NUMBER_DESC,
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
		id,
	};
};

export const userFavouriteAction = (id, friend) => {
	return {
		type: USER_FAVOURITE_ACTION,
		id,
		friend,
	};
};

export const userSortByNumberAsc = (users) => {
	return {
		type: USERS_SORT_BY_NUMBER_ASC,
		users,
	};
};

export const userSortByNumberDesc = (users) => {
	return {
		type: USERS_SORT_BY_NUMBER_DESC,
		users,
	};
};
