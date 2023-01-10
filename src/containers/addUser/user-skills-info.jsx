import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "../../components/select";
import { englishLvl } from "../../assets/constants";

export const UserSkillsInfo = ({ user, setUser, values, errors, touched }) => {
	const changeSkills = (e) => {
		console.log(e.target.value);
		if (e.target.value >= 0 && e.target.value < 11) {
			setUser({
				...user,
				skills: {
					...user.skills,
					[e.target.name]: e.target.value,
				},
			});
		} else {
			toast.error("Input number between 0 and 10", {
				toastId: "number",
			});
		}
	};

	const selectEnglishLvl = (e) => {
		setUser({
			...user,
			skills: {
				...user.skills,
				english: e.target.value,
			},
		});
	};

	return (
		<StyledSkillsInfo>
			<span className="divider"></span>
			<h1>Skills</h1>
			<div className="social-links-wrapper">
				<div className="social-link-container">
					<span> Experience in years</span>
					<input
						className="new-user-field"
						name="experience"
						value={user.skills.experience}
						type="number"
						placeholder="Enter value between 1 and 10"
						onChange={changeSkills}
					/>
				</div>
				<div className="social-link-container">
					<span>Communication </span>
					<input
						className="new-user-field"
						value={user.skills.communication}
						maxLength={2}
						name="communication"
						placeholder="Enter value between 1 and 10"
						onChange={changeSkills}
					/>
				</div>
				<div className="social-link-container">
					<span>English </span>
					<Select data={englishLvl} selectHandle={selectEnglishLvl} />
				</div>
				<div className="social-link-container">
					<span>Professional skills </span>
					<input
						className="new-user-field"
						name="professionSkills"
						value={user.skills.professionSkills}
						maxLength={2}
						placeholder="Enter value between 1 and 10"
						onChange={changeSkills}
					/>
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

	.divider {
		width: 100%;
		margin-top: 48px;
		height: 2px;
		background-color: #465374;
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
`;
