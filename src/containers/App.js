import { Provider } from "react-redux";
import { createStore } from "redux";
import { FriendListApp } from "./friend-list-app";
import { store } from "../store/store";
import React from "react";

function App() {
	return (
		<Provider store={store}>
			<FriendListApp />
		</Provider>
	);
}

export default App;
