import { Field } from "formik";
import styled from "styled-components";

export const UserSocialLinks = ({ values, errors, touched }) => {
	return (
		<SocialLinksWrapper>
			<div className="social-link-container">
				<span className="social-link-label">Website</span>
				<Field
					className="new-user-field"
					name="website"
					value={values.website}
					placeholder="Enter your website link"
				/>
				{errors.website && touched.website && (
					<span className="error-message-field">{errors.website}</span>
				)}
			</div>
			<div className="social-link-container">
				<span className="social-link-label">Github</span>
				<Field
					className="new-user-field"
					name="github"
					value={values.github}
					placeholder="Enter your website link"
				/>
				{errors.github && touched.github && (
					<span className="error-message-field">{errors.github}</span>
				)}
			</div>
			<div className="social-link-container">
				<span className="social-link-label">Instagram</span>
				<Field
					className="new-user-field"
					name="instagram"
					value={values.instagram}
					placeholder="Enter your website link"
				/>
				{errors.instagram && touched.instagram && (
					<span className="error-message-field">{errors.instagram}</span>
				)}
			</div>
			<div className="social-link-container">
				<span className="social-link-label">Facebook</span>
				<Field
					className="new-user-field"
					name="facebook"
					value={values.facebook}
					placeholder="Enter your website link"
				/>
				{errors.facebook && touched.facebook && (
					<span className="error-message-field">{errors.facebook}</span>
				)}
			</div>
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

		.social-link-label {
			color: #646161;
			font-weight: 500;
			opacity: 0.7;
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

	.error-message-field {
		color: red;
		font-size: 10px;
	}
`;
