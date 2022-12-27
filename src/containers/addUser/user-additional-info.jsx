import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { userAddAction } from "../../store/actionCreators/users";

export const UserAdditionalInfo = ({ user, setUser }) => {
	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);

	const handleSubmit = () => {
		console.log(user);
		if (
			user.name === "" ||
			user.surname === "" ||
			user.email === "" ||
			user.profession === "" ||
			user.city === ""
		) {
			toast.error("Fill all fields !", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(user);
		} else {
			dispatch(userAddAction({ user, id }));
			toast.success("User created !", {
				position: toast.POSITION.TOP_RIGHT,
			});
			setUser({
				name: "",
				surname: "",
				email: "",
				phone: "",
				profession: "",
				avatar: "",
				city: "",
			});
		}
	};
	return (
		<StyledAdditionalInfo>
			{console.log(16.6666666666666666 * 6)}
			<h1 className="user-additional-header">Social links</h1>
			<div className="social-links-wrapper">
				<div className="social-link-container">
					<span> Website</span>
					<input
						className="new-user-field"
						placeholder="Enter your website link"
					/>
				</div>
				<div className="social-link-container">
					<span>Github </span>
					<input
						className="new-user-field"
						placeholder="Enter your gihtub link"
					/>
				</div>
				<div className="social-link-container">
					<span>Facebook </span>
					<input
						className="new-user-field"
						placeholder="Enter your facebook link"
					/>
				</div>
				<div className="social-link-container">
					<span>Instagram </span>
					<input
						placeholder="Enter your instagram link"
						className="new-user-field"
					/>
				</div>
			</div>
			<span className="divider"></span>
			<h1>Skills</h1>
			<div className="social-links-wrapper">
				<div className="social-link-container">
					<span> Experience in years</span>
					<input
						className="new-user-field"
						placeholder="Enter value between 1 and 10"
					/>
				</div>
				<div className="social-link-container">
					<span>English </span>
					<input
						className="new-user-field"
						placeholder="Enter value between 1 and 10"
					/>
				</div>
				<div className="social-link-container">
					<span>Communication </span>
					<select className="select-english-lvl" defaultValue="select value">
						<option value="">A1</option>
						<option value="">A2</option>
						<option value="">B1</option>
						<option value="">B2</option>
						<option value="">C1</option>
						<option value="">C2</option>
					</select>
				</div>
				<div className="social-link-container">
					<span>Professional skills </span>
					<input
						className="new-user-field"
						placeholder="Enter value between 1 and 10"
					/>
				</div>
			</div>
			<button className="create-user-btn" onClick={handleSubmit}>
				Create user
			</button>
		</StyledAdditionalInfo>
	);
};

const StyledAdditionalInfo = styled.div`
	max-width: 700px;
	width: 100%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

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
	}

	.new-user-field {
		width: 93%;
		margin-top: 4px;
		padding: 12px 10px;
		align-self: center;
		border: 1px solid #c3b7b7;
		border-radius: 4px;
	}

	.divider {
		width: 100%;
		margin-top: 40px;
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
		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}
`;
