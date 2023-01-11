import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
	return (
		<HeaderStyled>
			<nav className="navigation-bar">
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/add-user-form">Add user</HeaderLink>
				<HeaderLink to="/users">Users list</HeaderLink>
			</nav>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	padding: 14px;
	background-color: #465374;

	.navigation-bar {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}
`;

const HeaderLink = styled(Link)`
	padding: 8px 12px;
	border-radius: 8px;
	border: 2px solid #465374;
	text-decoration: none;
	background-color: #465374;
	color: white;

	&:hover {
		/* background-color: white;
		color: #465374;
		border: 2px solid white;
		transition: ease-in-out 0.3s; */
		border-radius: 0;
		border-bottom: 2px solid white;
		transition: ease-in-out 0.3s;
	}
`;
