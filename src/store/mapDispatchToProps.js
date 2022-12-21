import { bindActionCreators } from "redux";
import { action_1 } from "./actionCreators/action_1";
import { DeleteAction } from "./actionCreators/delete-action";

export const MapDispatchToProps = (component) => {
	switch (component) {
		case "Component_1": {
			return (dispatch) => {
				return {
					change_value_1: bindActionCreators(action_1, dispatch),
				};
			};
		}
		case "delete": {
			return (dispatch) => {
				console.log(dispatch);
				return {
					delete_human: bindActionCreators(DeleteAction, dispatch),
				};
			};
		}
		default:
			return undefined;
	}
};
