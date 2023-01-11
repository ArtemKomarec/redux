import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "../../components/select";
import { englishLvl } from "../../assets/constants";
import { Field } from "formik";

export const UserSkillsInfo = ({ values, errors, touched }) => {
	return (
		<StyledSkillsInfo>
			<h1>Skills</h1>
			<div className="social-links-wrapper">
				<div className="social-link-container">
					<span> Experience in years</span>
					<Field
						className="new-user-field"
						name="experience"
						value={values.experience}
						placeholder="Enter value between 0 and 10"
					/>
					{errors.experience && touched.experience && (
						<span className="error-message-field">{errors.experience}</span>
					)}
				</div>
				<div className="social-link-container">
					<span>Communication </span>
					<Field
						className="new-user-field"
						name="communication"
						value={values.communication}
						placeholder="Enter value between 0 and 10"
					/>
					{errors.communication && touched.communication && (
						<span className="error-message-field">{errors.communication}</span>
					)}
				</div>
				<div className="social-link-container">
					<span>English</span>
					<Select data={englishLvl} />
				</div>
				<div className="social-link-container">
					<span>Professional skills </span>
					<Field
						className="new-user-field"
						name="professionSkills"
						value={values.professionSkills}
						placeholder="Enter value between 0 and 10"
					/>
					{errors.professionSkills && touched.professionSkills && (
						<span className="error-message-field">
							{errors.professionSkills}
						</span>
					)}
				</div>
			</div>
			<button className="create-user-btn" type="submit">
				Create user
			</button>
		</StyledSkillsInfo>
	);
};

const StyledSkillsInfo = styled.div`
	.user-additional-header {
		align-self: flex-start;
	}

	.social-links-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 30px;
		row-gap: 20px;
	}

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

	.select-english-lvl {
		margin-top: 4px;
		padding: 11.25px 8px;
		border-radius: 4px;
		border: 1px solid #c3b7b7;
	}

	.create-user-btn {
		max-width: 120px;
		margin-top: 30px;
		padding: 8px 6px;

		border-radius: 4px;
		border: 2px solid #465374;
		color: #e2e8f0;
		background-color: #465374;
		transition: 0.4s ease;

		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}
	.create-user-btn:hover {
		color: #465374;
		background-color: white;
		font-weight: 500;
	}

	.select-menu-container {
		margin-top: 4px;
		padding: 11.25px 8px;
		border-radius: 6px;
		border: 1px solid #c3b7b7;
	}

	.select-menu-container:focus-visible {
		outline: none;
	}
`;
