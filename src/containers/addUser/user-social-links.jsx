import styled from "styled-components";

export const UserSocialLinks = ({ user, changeSocials }) => {
	return (
		<SocialLinksWrapper>
			{user.socials.map((currentSocial, index) => (
				<div className="social-link-container" key={currentSocial.name}>
					<span>{currentSocial.name}</span>
					<input
						className="new-user-field"
						name={currentSocial.name}
						value={user.socials[index][currentSocial.name]}
						placeholder="Enter your gihtub link"
						onChange={(e) => changeSocials(e, index)}
					/>
				</div>
			))}
		</SocialLinksWrapper>
	);
};

const SocialLinksWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 30px;
	row-gap: 20px;

	.social-link-container {
		width: 100%;
		display: flex;
		flex-direction: column;

		span {
			color: #646161;
			font-weight: 500;
			opacity: 0.7;
		}

		span::first-letter {
			text-transform: capitalize;
		}
	}

	.new-user-field {
		width: 93%;
		margin-top: 4px;
		padding: 12px 10px;
		align-self: center;
		border: 1px solid #c3b7b7;
		border-radius: 4px;
		-moz-appearance: textfield;
	}

	.new-user-field::-webkit-inner-spin-button {
		display: none;
	}

	.new-user-field:focus {
		border: 1px solid #064f87cc;
		outline: #064f87cc;
	}
`;
