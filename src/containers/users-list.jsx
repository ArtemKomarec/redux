import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	userDeleteAction,
	userFavouriteAction,
} from "../store/actionCreators/users";

function UsersList() {
	const dispatch = useDispatch();
	const allUsers = useSelector(({ users }) => users);

	return (
		<StyledUsersList>
			{console.log(allUsers)}
			{allUsers.map((user, index) => (
				<div className="users-list-wrapper" key={user.name + index}>
					<div className="users-list-container">
						<div className="image-container">
							<img
								className="user-avatar"
								src={user.avatar}
								alt={user.name + "avatar"}
							/>
						</div>
						<h4 className="user-name">{user.name}</h4>
						<p className="user-friend">Friend: {user.friend ? "yes" : "no"}</p>
					</div>
					<div className="btn-field">
						<button
							className="user-friend-btn"
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
				</div>
			))}
		</StyledUsersList>
	);
}

const StyledUsersList = styled.div`
	width: 400px;
	margin: 40px auto;
	padding: 20px;
	border: 2px solid #c3b7b7;

	.users-list-wrapper {
		padding: 16px 0px;
		display: flex;
		flex-direction: row;
		gap: 40px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid #c3b7b7;
		&:hover {
			background-color: #c3b7b7;
			cursor: pointer;
		}
	}

	.users-list-container {
		width: 200px;
	}

	.image-container {
		height: 70px;
		width: 70px;
		border: 2px solid black;
		border-radius: 50%;
	}

	.user-avatar {
		max-width: 100%;
		max-height: 100%;
		border-radius: 50%;
	}

	.user-name {
		margin: "14px 0px";
	}

	.user-friend {
		margin: "4px 0px";
	}

	.btn-field {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.user-friend-btn {
		height: 20px;
	}

	.delete-user-btn {
		height: 20px;
	}
`;

export default React.memo(UsersList);
