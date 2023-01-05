import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddUserForm } from "./addUser/add-user-form";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { NotFound } from "./not-found";
import { UserPage } from "./userProfile/user-page";
import { Home } from "./home";
import { UsersList } from "./usersList/users-list";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="add-user-form" element={<AddUserForm />} />
					<Route path="users" element={<UsersList />}></Route>
					<Route path="/users/:id" element={<UserPage />}></Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default React.memo(App);
