import { Provider } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { store } from "../store/store";

export const Header = () => {
	return (
		<HeaderStyled>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/add-user-form">Add user</Link>
				<Link to="/users-list">Users list</Link>
			</nav>

			<Outlet />
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div``;
