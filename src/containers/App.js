import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./header";
import { AddUserForm } from "./add-user-form";
import UsersList from "./users-list";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { NotFound } from "./not-found";
import { UserPage } from "./user-page";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route path="add-user-form" element={<AddUserForm />} />
						<Route path="users" element={<UsersList />}></Route>
						<Route path="/users/:id" element={<UserPage />}></Route>
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default React.memo(App);
