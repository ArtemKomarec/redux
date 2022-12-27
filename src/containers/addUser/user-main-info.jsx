import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

export const UserMainInfo = ({ user, setUser }) => {
	const [userImage, setUserImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	const textFields = ["name", "surname", "email", "profession", "city"];

	const changeInput = (e) => {
		console.log(e.target.name);
		if (e.target.value === "" && textFields.includes(e.target.name)) {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
		if (textFields.includes(e.target.name)) {
			if (/[a-zA-Z]+/g.test(e.target.value)) {
				setUser({ ...user, [e.target.name]: e.target.value });
			}
		} else if (e.target.name === "phone") {
			if (e.target.value === "") {
				setUser({ ...user, [e.target.name]: e.target.value });
			}
			if (parseInt(e.target.value)) {
				setUser({ ...user, [e.target.name]: e.target.value });
			} else {
				toast.error("Should write only numbers");
			}
		}
	};

	const handleUploadImage = (e) => {
		setUserImage(e.target.files[0]);
	};

	useEffect(() => {
		if (userImage) {
			setImageUrl((image) => {
				image = URL.createObjectURL(userImage);
				setUser({ ...user, avatar: image });
				return image;
			});
			console.log(imageUrl);
		}
	}, [userImage]);

	return (
		<StyledNewUserAvatar>
			<img className="new-user-avatar" src={user.avatar} />
			<label htmlFor="upload-image">
				<span className="new-user-avatar-btn">Upload image</span>
			</label>
			<input
				id="upload-image"
				type="file"
				name="avatar"
				accept="image/"
				style={{ display: "none" }}
				onChange={handleUploadImage}
			/>
			{/* <button className="new-user-avatar-btn">Remove profile picture</button> */}
			<span className="divider"></span>
			<div className="new-user-field-wrapper">
				<div className="new-user-field-container">
					<span>Name</span>
					<input
						className="new-user-field"
						name="name"
						placeholder="Type user name"
						type="text"
						value={user.name}
						onChange={changeInput}
					/>
				</div>
				<div className="new-user-field-container">
					<span>Phone</span>
					<input
						className="new-user-field"
						name="phone"
						placeholder="Type user phone"
						type="text"
						value={user.phone}
						onChange={changeInput}
					/>
				</div>
				<div className="new-user-field-container">
					<span>Surname</span>
					<input
						className="new-user-field"
						name="surname"
						placeholder="Type user surname"
						type="text"
						value={user.surname}
						onChange={changeInput}
					/>
				</div>
				<div className="new-user-field-container">
					<span>Profession</span>
					<input
						className="new-user-field"
						name="profession"
						placeholder="Type user profession"
						type="text"
						value={user.profession}
						onChange={changeInput}
					/>
				</div>
				<div className="new-user-field-container">
					<span>Email</span>
					<input
						className="new-user-field"
						name="email"
						placeholder="Type user email"
						type="text"
						value={user.email}
						onChange={changeInput}
					/>
				</div>
				<div className="new-user-field-container">
					<span>Address</span>
					<input
						className="new-user-field"
						name="city"
						placeholder="Type user address"
						type="text"
						value={user.city}
						onChange={changeInput}
					/>
				</div>
			</div>
		</StyledNewUserAvatar>
	);
};

const StyledNewUserAvatar = styled.div`
	max-width: 350px;
	width: 100%;
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	border-radius: 6px;
	box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
	background-color: white;

	.new-user-avatar {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-bottom: 14px;
	}

	.new-user-avatar-btn {
		width: 170px;
		padding: 6px 20px;
		border-radius: 4px;
		border: 2px solid #465374;
		color: #e2e8f0;
		background-color: #465374;
		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}

	.divider {
		width: 100%;
		margin-top: 20px;
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
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		gap: 6px;

		span {
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
`;
