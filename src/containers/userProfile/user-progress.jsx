import styled from "styled-components";

export const UserProgress = () => {
	return (
		<StyledUserProgress>
			<div className="user-progress-container">
				<span>Experience</span>
				<div className="progress-bar-wrapper">
					<div className="progress-bar-result"></div>
				</div>
			</div>
			<div className="user-progress-container">
				<span>English</span>
				<div className="progress-bar-wrapper">
					<div className="progress-bar-result"></div>
				</div>
			</div>
			<div className="user-progress-container">
				<span>Communication</span>
				<div className="progress-bar-wrapper">
					<div className="progress-bar-result"></div>
				</div>
			</div>
			<div className="user-progress-container">
				<span>Professinal skills</span>
				<div className="progress-bar-wrapper">
					<div className="progress-bar-result"></div>
				</div>
			</div>
		</StyledUserProgress>
	);
};

const StyledUserProgress = styled.div`
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

	.user-progress-container {
		width: 100%;
	}

	.progress-bar-wrapper {
		width: 100%;
		height: 6px;
		margin-top: 4px;
		border-radius: 4px;
		background-color: #e9ecef;
	}

	.progress-bar-result {
		width: 50%;
		height: 6px;
		border-radius: 4px;
		background-color: #007bff;
	}

	span {
		font-size: 13px;
	}
`;
