import styled from "styled-components";

export const UsersListHeader = () => {
	return (
		<StyledListHeader className="user-list-header">
			<div>
				<h1>Users</h1>
				<h2>List of users in the platform</h2>
			</div>
			<div className="users-sorting">sorting</div>
		</StyledListHeader>
	);
};

export const StyledListHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.users-sorting {
		align-self: flex-end;
	}
`;
