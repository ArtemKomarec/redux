import styled from "styled-components";
import { Facebook } from "../../assets/icons/facebook";
import { Github } from "../../assets/icons/github";
import { Instagram } from "../../assets/icons/instagram";
import { Website } from "../../assets/icons/website";

export const UserSocials = ({ socials }) => {
	const icons = [<Website />, <Github />, <Instagram />, <Facebook />];
	return (
		<StyledUserSocials className="user-socials-wrapper">
			{socials.map((currentSocial, index) => (
				<div
					className="user-social-container"
					key={currentSocial.name + currentSocial.link}
				>
					<span>
						{icons[index]}
						{currentSocial.name}
					</span>
					<a
						target="_blank"
						href={currentSocial.link}
						rel="noopener noreferrer"
						className="social-link"
						style={
							currentSocial.link ? { color: "#055dbb" } : { color: " #6c757d" }
						}
					>
						{currentSocial.link ? `${currentSocial.link}` : "No website"}
					</a>
				</div>
			))}
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
			text-align: right;
		}

		.social-link {
			text-decoration: none;
			word-break: break-all;
		}
	}
`;
