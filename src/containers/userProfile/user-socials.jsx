import styled from "styled-components";
import { Facebook } from "../../assets/icons/facebook";
import { Github } from "../../assets/icons/github";
import { Instagram } from "../../assets/icons/instagram";
import { Twitter } from "../../assets/icons/twitter";
import { Website } from "../../assets/icons/website";

export const UserSocials = ({ socials }) => {
	return (
		<StyledUserSocials className="user-socials-wrapper">
			<div className="user-social-container">
				<span>
					<Website /> Website
				</span>
				<p className="social-link">
					{socials.website ? `${socials.website}` : "No website"}
				</p>
			</div>
			<div className="user-social-container">
				<span>
					<Github /> Github
				</span>
				<p className="social-link">
					{socials.github ? `${socials.github}` : "No github"}
				</p>
			</div>
			<div className="user-social-container">
				<span>
					<Twitter /> Twitter
				</span>
				<p className="social-link">
					{socials.twitter ? `${socials.twitter}` : "No twitter"}
				</p>
			</div>
			<div className="user-social-container">
				<span>
					<Instagram /> Instagram
				</span>
				<p className="social-link">
					{socials.instagram ? `${socials.instagram}` : "No instagram"}
				</p>
			</div>
			<div className="user-social-container">
				<span>
					<Facebook /> Instagram
				</span>
				<p className="social-link">
					{socials.facebook ? `${socials.facebook}` : "No facebook"}
				</p>
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
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #acacac;

		span {
			display: flex;
			align-items: center;
			gap: 4px;
			padding: 0px 8px;
		}

		p {
			padding: 0px 8px;
		}

		.social-link {
			color: #6c757d;
		}
	}
`;
