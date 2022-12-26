import styled from "styled-components";

export const UserSocials = ({ socials }) => {
	return (
		<StyledUserSocials className="user-socials-wrapper">
			<div className="user-social-container">
				<p>icon</p>
				<p className="social-link">{socials.website}</p>
			</div>
			<div className="user-social-container">
				<p>icon</p>
				<p className="social-link">{socials.github}</p>
			</div>
			<div className="user-social-container">
				<p>icon</p>
				<p className="social-link">{socials.twitter}</p>
			</div>
			<div className="user-social-container">
				<p>icon</p>
				<p className="social-link">{socials.instagram}</p>
			</div>
			<div className="user-social-container">
				<p>icon</p>
				<p className="social-link">{socials.facebook}</p>
			</div>
		</StyledUserSocials>
	);
};

const StyledUserSocials = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;
	.user-socials-wrapper {
		padding: 0px;
	}

	.user-social-container {
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
`;
