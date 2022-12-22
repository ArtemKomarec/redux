import { Provider } from "react-redux";
import FriendListApp from "./users-form";
import { store } from "../store/store";
import React from "react";
import UsersForm from "./users-form";

function App() {
	return (
		<Provider store={store}>
			<UsersForm />
		</Provider>
	);
}

export default React.memo(App);
