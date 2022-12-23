import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
	return (
		<HeaderStyled>
			<nav className="navigation-bar">
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/add-user-form">Add user</HeaderLink>
				<HeaderLink to="/users-list">Users list</HeaderLink>
			</nav>

			<Outlet />
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	padding: 14px;

	.navigation-bar {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
`;

const HeaderLink = styled(Link)`
	padding: 8px 12px;
	border-radius: 8px;
	border: 2px solid black;
	text-decoration: none;
	color: black;

	&:hover {
		background-color: #494949;
		color: white;
		border: white 2px solid;
	}
`;
