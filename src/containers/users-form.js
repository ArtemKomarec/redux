import React from "react";
import styled from "styled-components";
import AddFriendInput from "./add-friend-input";
import Friends from "./friends";

function UsersForm() {
	return (
		<UsersFormWrapper>
			<h1 className="users-list-title">Friends list</h1>
			<AddFriendInput />
			<Friends />
		</UsersFormWrapper>
	);
}

const UsersFormWrapper = styled.div`
	width: 400px;
	margin: 40px auto;
	padding: 20px;
	border: 2px solid #c3b7b7;

	.users-list-title {
		text-align: center;
	}
`;

export default React.memo(UsersForm);
