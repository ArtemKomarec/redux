import styled from "styled-components";
import { Dropdown } from "../../components/dropdown";

export const UsersListHeader = () => {
	return (
		<StyledListHeader className="user-list-header">
			<div>
				<h1>Users</h1>
				<h2>List of users in the platform</h2>
			</div>
			<div className="users-sorting">
				<Dropdown />
			</div>
		</StyledListHeader>
	);
};

export const StyledListHeader = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: relative;

	.users-sorting {
		margin-top: 40px;
	}
`;
