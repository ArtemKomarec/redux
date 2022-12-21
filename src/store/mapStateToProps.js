export const MapStateToProps = (component) => {
	switch (component) {
		case "Component_1": {
			return (state) => {
				return { value_1: state.value_1 };
			};
		}
		case "delete": {
			return (state) => {
				return { state: state.deleteHuman };
			};
		}
		default:
			return undefined;
	}
};
