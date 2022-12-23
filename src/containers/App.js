import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header";
import { AddUserForm } from "./add-user-form";
import UsersList from "./users-list";
import { Provider } from "react-redux";
import { store } from "../store/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						{/* <Route  element={}></Route> */}
						<Route path="add-user-form" element={<AddUserForm />} />
						<Route path="users-list" element={<UsersList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default React.memo(App);
