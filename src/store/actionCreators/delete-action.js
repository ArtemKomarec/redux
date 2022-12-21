import { DELETE_ACTION } from "../actions/delete";

export const DeleteAction = (value) => {
	return {
		type: DELETE_ACTION,
		deleteHuman: value,
	};
};
