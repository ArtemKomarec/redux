import styled from "styled-components";

export const UserFullInfo = ({ user }) => {
	return (
		<StyledUserFullInfo>
			<div className="user-info-container">
				<p>Full name</p>
				<p className="social-link">{user.name}</p>
			</div>
			<div className="user-info-container">
				<p>Email</p>
				<p className="social-link">{user.email}</p>
			</div>
			<div className="user-info-container">
				<p>Phone</p>
				<p className="social-link">{user.phone}</p>
			</div>
			<div className="user-info-container">
				<p>Profession</p>
				<p className="social-link">{user.profession}</p>
			</div>
			{user.city && (
				<div className="user-info-container">
					<p>Address</p>
					<p className="social-link">{user.city}</p>
				</div>
			)}
			<button className="user-edit-btn">Edit</button>
		</StyledUserFullInfo>
	);
};

const StyledUserFullInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

	.user-info-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px solid #acacac;
		p {
			padding: 0px 6px;
		}

		.social-link {
			color: #6c757d;
		}
	}

	.user-edit-btn {
		margin: 10px 8px;
		align-self: flex-start;
		padding: 8px 20px;
		border-radius: 4px;
		border: 2px solid darkcyan;
		color: white;
		background-color: darkcyan;
		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}
`;
