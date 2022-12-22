import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	userDeleteAction,
	userFavouriteAction,
} from "../store/actionCreators/users";

function Friends() {
	const dispatch = useDispatch();
	const allUsers = useSelector(({ users }) => users);
	return (
		<>
			{allUsers.map((user, index) => (
				<UsersListWrapper key={user.name + index} style={{}}>
					<div className="users-list-container">
						<h4 className="user-name">{user.name}</h4>
						<p className="user-friend">Friend: {user.friend ? "yes" : "no"}</p>
					</div>

					<div className="user-field">
						<button
							className="user-friend-btn"
							style={{}}
							onClick={() => dispatch(userFavouriteAction(index, user.friend))}
						>
							{user.friend ? "remove friend" : "make friend"}
						</button>

						<button
							className="delete-user-btn"
							onClick={() => dispatch(userDeleteAction(index))}
						>
							Delete
						</button>
					</div>
				</UsersListWrapper>
			))}
		</>
	);
}

const UsersListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
	align-items: center;
	justify-content: space-between;

	.users-list-container {
		width: 200px;
		display: flex;
		flex-direction: column;
	}

	.user-name {
		margin: "14px 0px";
	}

	.user-friend {
		margin: "4px 0px";
	}

	.user-field {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}

	.user-friend-btn {
		height: 20px;
		width: 100px;
	}

	.delete-user-btn {
		height: 20px;
	}
`;

export default React.memo(Friends);
