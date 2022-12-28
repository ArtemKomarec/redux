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
				<a
					target="_blank"
					href={socials.website}
					className="social-link"
					style={socials.website ? { color: "#055dbb" } : { color: " #6c757d" }}
				>
					{socials.website ? `${socials.website}` : "No website"}
				</a>
			</div>
			<div className="user-social-container">
				<span>
					<Github /> Github
				</span>
				<a
					target="_blank"
					href={socials.github}
					className="social-link"
					style={socials.github ? { color: "#055dbb" } : { color: " #6c757d" }}
				>
					{socials.github ? `${socials.github}` : "No github"}
				</a>
			</div>

			<div className="user-social-container">
				<span>
					<Instagram /> Instagram
				</span>
				<a
					target="_blank"
					href={socials.instagram}
					className="social-link"
					style={
						socials.instagram ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials.instagram ? `${socials.instagram}` : "No instagram"}
				</a>
			</div>
			<div className="user-social-container">
				<span>
					<Facebook /> Facebook
				</span>
				<a
					target="_blank"
					href={socials.facebook}
					className="social-link"
					style={
						socials.facebook ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials.facebook ? `${socials.facebook}` : "No facebook"}
				</a>
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

		a {
			margin: 16px 0px;
			padding: 0px 8px;
		}

		.social-link {
			text-decoration: none;
			word-break: break-all;
		}
	}
`;
