import styled from "styled-components";

export const UserShortInfo = ({ user }) => {
	return (
		<StyledUserShortInfo className="user-short-info">
			<img className="user-avatar" src={user.avatar} />
			<h1 className="user-name">{user.name + " " + user.surname}</h1>
			<p className="user-short-additional">{user.profession}</p>
			<p className="user-short-additional">{user.city}</p>
		</StyledUserShortInfo>
	);
};

const StyledUserShortInfo = styled.div`
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

	.user-avatar {
		max-width: 150px;
		width: 100%;
		max-height: 150px;
	}

	.user-name {
		margin: 0;
	}

	.user-short-additional {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
			"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #6c757d;
	}
`;
