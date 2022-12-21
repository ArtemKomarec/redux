import { combineReducers } from "redux";
import { value_1 } from "./reducer_1";
import { deleteHuman } from "./reducer_2";

export const reducers = combineReducers({
	value_1,
	deleteHuman,
});
