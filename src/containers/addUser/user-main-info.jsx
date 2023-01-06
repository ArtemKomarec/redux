import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { Field } from "formik";

export const UserMainInfo = ({ values, errors, touched }) => {
	return (
		<StyledNewUserMainInfo>
			<div className="divider"></div>
			<div className="new-user-field-wrapper">
				<div className="new-user-field-container">
					<span className="new-user-field-label">Username</span>
					<Field
						style={
							errors.username
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						name="username"
						value={values.username}
						placeholder="Username"
					/>
					{errors.username && (
						<span className="error-message-field">{errors.username}</span>
					)}
				</div>
				<div className="new-user-field-container">
					<span className="new-user-field-label">Email</span>
					<Field
						style={
							errors.email
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						name="email"
						value={values.email}
						placeholder="Email"
					/>
					{errors.email && (
						<span className="error-message-field">{errors.email}</span>
					)}
				</div>
				<div className="new-user-field-container">
					<span className="new-user-field-label">Age</span>
					<Field
						style={
							errors.age
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						name="age"
						value={values.age}
						placeholder="Age"
					/>
					{errors.age && (
						<span className="error-message-field">{errors.age}</span>
					)}
				</div>
				<div className="new-user-field-container">
					<span className="new-user-field-label">Phone</span>
					<Field
						style={
							errors.phone
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						placeholder="Phone"
						name="phone"
						value={values.phone}
					/>
					{errors.phone && (
						<span className="error-message-field">{errors.phone}</span>
					)}
				</div>
				<div className="new-user-field-container">
					<span className="new-user-field-label">Profession</span>
					<Field
						style={
							errors.profession
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						placeholder="Profession"
						name="profession"
						value={values.profession}
					/>
					{errors.profession && (
						<span className="error-message-field">{errors.profession}</span>
					)}
				</div>
				<div className="new-user-field-container">
					<span className="new-user-field-label">City</span>
					<Field
						style={
							errors.city
								? { border: "1px solid red" }
								: { border: "1px solid #c3b7b7" }
						}
						className="new-user-field"
						placeholder="City"
						name="city"
						value={values.city}
					/>
					{errors.city && (
						<span className="error-message-field">{errors.city}</span>
					)}
				</div>
			</div>
		</StyledNewUserMainInfo>
	);
};

const StyledNewUserMainInfo = styled.div`
	margin-top: 20px;

	.divider {
		width: 100%;
		margin-top: 7px;
		height: 2px;
		background-color: #465374;
	}

	.new-user-field-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 30px;
	}

	.new-user-field-container {
		width: 100%;
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 6px;

		.new-user-field-label {
			color: #646161;
			font-weight: 500;
			opacity: 0.7;
		}
	}

	.new-user-field {
		width: 86%;
		padding: 12px 10px;
		align-self: center;
		border: 1px solid #c3b7b7;
		border-radius: 4px;
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
