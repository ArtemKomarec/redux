import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userAddAction } from "../store/actionCreators/users";
import { debounce } from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const textFields = ["name", "surname", "profession"];

export const AddUserForm = () => {
	const [user, setUser] = useState({
		name: "",
		surname: "",
		age: "",
		profession: "",
		friend: "",
		avatar: "",
	});
	const [userImage, setUserImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);

	const handleSubmit = (e) => {
		console.log(imageUrl);
		setUser({ ...user, avatar: imageUrl });

		console.log(user);
		if (
			user.name === "" ||
			user.surname === "" ||
			user.age === "" ||
			user.profession === ""
		) {
			toast.error("Fill all fields !", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(user);
		} else {
			setUser({ ...user, avatar: imageUrl });
			dispatch(userAddAction({ user, id }));
			toast.success("User created !", {
				position: toast.POSITION.TOP_RIGHT,
			});
			setUser({
				name: "",
				surname: "",
				age: "",
				profession: "",
				friend: "",
				avatar: "",
			});
		}
	};

	const changeInput = (e) => {
		if (e.target.value === "" && textFields.includes(e.target.name)) {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
		if (textFields.includes(e.target.name)) {
			if (/[a-zA-Z]+/g.test(e.target.value)) {
				setUser({ ...user, [e.target.name]: e.target.value });
			}
		} else if (e.target.name === "age") {
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

	const handleSelectFriend = (e) => {
		setUser({ ...user, friend: e.target.value });
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
		<UserFormWrapper>
			<h1>Fill user profile</h1>
			<ToastContainer />
			<input
				className="add-user-field"
				name="name"
				placeholder="Type user name"
				type="text"
				value={user.name}
				onChange={changeInput}
			/>
			<input
				className="add-user-field"
				placeholder="Type user surname"
				name="surname"
				value={user.surname}
				onChange={changeInput}
			/>
			<input
				className="add-user-field"
				placeholder="Type user age"
				name="age"
				value={user.age}
				onChange={changeInput}
			/>
			<input
				className="add-user-field"
				name="profession"
				value={user.profession}
				placeholder="Type user profession"
				onChange={changeInput}
			/>
			<select defaultValue="" onChange={handleSelectFriend}>
				<option value="true">Yes</option>
				<option value="">No</option>
			</select>
			<label htmlFor="upload-image">
				<span className="upload-image-btn">Upload image</span>
			</label>
			{userImage && imageUrl && <img src={imageUrl} />}
			<input
				id="upload-image"
				type="file"
				name="avatar"
				accept="image/"
				style={{ display: "none" }}
				onChange={handleUploadImage}
			/>
			<button className="add-user-btn" onClick={handleSubmit}>
				add user
			</button>
		</UserFormWrapper>
	);
};

const UserFormWrapper = styled.div`
	width: 400px;
	margin: 40px auto;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 18px;
	border: 2px solid #c3b7b7;

	.add-user-field {
		width: 80%;
		border: 0px;
		border-bottom: 2px solid #c3b7b7;
		&:focus-visible {
			outline: none;
		}
	}

	.upload-image {
		display: none;
	}

	.upload-image-btn {
		padding: 4px 8px;
		border: 2px solid;
		cursor: pointer;
	}
`;
