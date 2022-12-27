import { useState } from "react";
import styled from "styled-components";

export const AddUserAvatar = ({ user }) => {
	const [userImage, setUserImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	return (
		<StyledNewUserAvatar>
			<img className="new-user-avatar" src={user.avatar} />
			<button className="new-user-avatar-btn">Upload new</button>
			<button className="new-user-avatar-btn">Remove profile picture</button>
			<span className="divider"></span>
			<div className="new-user-field-wrapper">
				<div className="new-user-field-container">
					<span>Name</span>
					<input className="new-user-name" placeholder="Type user name" />
				</div>
				<div className="new-user-field-container">
					<span>Phone</span>
					<input className="new-user-name" placeholder="Type user phone" />
				</div>
				<div className="new-user-field-container">
					<span>Surname</span>
					<input className="new-user-name" placeholder="Type user surname" />
				</div>
				<div className="new-user-field-container">
					<span>Profession</span>
					<input className="new-user-name" placeholder="Type user profession" />
				</div>
				<div className="new-user-field-container">
					<span>Email</span>
					<input className="new-user-name" placeholder="Type user email" />
				</div>
				<div className="new-user-field-container">
					<span>Address</span>
					<input className="new-user-name" placeholder="Type user address" />
				</div>
			</div>
		</StyledNewUserAvatar>
	);
};

const StyledNewUserAvatar = styled.div`
	max-width: 300px;
	width: 100%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

	.new-user-avatar {
		width: 200px;
		height: 200px;
		margin-bottom: 14px;
	}

	.new-user-avatar-btn {
		width: 170px;
		padding: 8px 6px;
		border-radius: 4px;
		border: 2px solid #465374;
		color: #e2e8f0;
		background-color: #465374;
		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}

	.divider {
		width: 100%;
		margin-top: 20px;
		height: 2px;
		background-color: #465374;
	}

	.new-user-field-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 30px;
	}

	.new-user-field-container {
		width: 100%;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		gap: 6px;

		span {
			color: #646161;
			font-weight: 500;
			opacity: 0.7;
		}
	}

	.new-user-name {
		width: 86%;
		padding: 12px 10px;
		align-self: center;
		border: 1px solid #c3b7b7;
		border-radius: 4px;
	}
`;
