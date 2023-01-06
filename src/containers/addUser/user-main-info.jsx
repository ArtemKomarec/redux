import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Field, Form, Formik } from "formik";
import { UserAddAvatar } from "./user-add-avatar";

export const UserMainInfo = ({ user, setUser, values, errors, touched }) => {
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
						placeholder="username"
					/>
					{errors.username && touched.username && (
						<span>{errors.username}</span>
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
						placeholder="email"
					/>
					{errors.email && touched.email && (
						<span className="error-message-field">{errors.email}</span>
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
