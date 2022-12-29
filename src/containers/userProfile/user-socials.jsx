import styled from "styled-components";
import { Facebook } from "../../assets/icons/facebook";
import { Github } from "../../assets/icons/github";
import { Instagram } from "../../assets/icons/instagram";
import { Website } from "../../assets/icons/website";

export const UserSocials = ({ socials }) => {
	const icons = [<Website />, <Github />, <Instagram />, <Facebook />];
	return (
		<StyledUserSocials className="user-socials-wrapper">
			{console.log(socials)}
			<div className="user-social-container">
				<span>
					<Website /> Website
				</span>
				<a
					target="_blank"
					href={socials[0].website}
					className="social-link"
					style={
						socials[0].website ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials[0].website ? `${socials[0].website}` : "No website"}
				</a>
			</div>
			<div className="user-social-container">
				<span>
					<Github /> Github
				</span>
				<a
					target="_blank"
					href={socials[1].github}
					className="social-link"
					style={
						socials[1].github ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials[1].github ? `${socials[1].github}` : "No github"}
				</a>
			</div>

			<div className="user-social-container">
				<span>
					<Instagram /> Instagram
				</span>
				<a
					target="_blank"
					href={socials[2].instagram}
					className="social-link"
					style={
						socials[2].instagram ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials[2].instagram ? `${socials[2].instagram}` : "No instagram"}
				</a>
			</div>
			<div className="user-social-container">
				<span>
					<Facebook /> Facebook
				</span>
				<a
					target="_blank"
					href={socials[3].facebook}
					className="social-link"
					style={
						socials[3].facebook ? { color: "#055dbb" } : { color: " #6c757d" }
					}
				>
					{socials[3].facebook ? `${socials[3].facebook}` : "No facebook"}
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
		display: grid;
		grid-template-columns: 120px 1fr;
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
