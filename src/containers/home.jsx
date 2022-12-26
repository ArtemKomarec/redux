import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./header";

export const Home = () => {
	return (
		<div>
			<Header />
		</div>
	);
};

const HeaderStyled = styled.div`
	padding: 14px;
	background-color: #e2e8f0;

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
