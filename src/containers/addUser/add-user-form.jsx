import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userAddAction } from "../../store/actionCreators/users";
import { debounce } from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../header";
import { AddUserAvatar } from "./add-user-avatar";

const textFields = ["name", "surname", "profession", "city"];

export const AddUserForm = () => {
	const [user, setUser] = useState({
		name: "",
		surname: "",
		age: "",
		profession: "",
		friend: "",
		avatar:
			"https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
		city: "",
	});
	// const [userImage, setUserImage] = useState(null);
	// const [imageUrl, setImageUrl] = useState(null);

	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);

	const handleSubmit = () => {
		console.log(user);
		if (
			user.name === "" ||
			user.surname === "" ||
			user.age === "" ||
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
				age: "",
				profession: "",
				friend: "",
				avatar: "",
				city: "",
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

	// const handleUploadImage = (e) => {
	// 	setUserImage(e.target.files[0]);
	// };

	// useEffect(() => {
	// 	if (userImage) {
	// 		setImageUrl((image) => {
	// 			image = URL.createObjectURL(userImage);
	// 			setUser({ ...user, avatar: image });
	// 			return image;
	// 		});
	// 		console.log(imageUrl);
	// 	}
	// }, [userImage]);

	return (
		<>
			<Header />
			<UserFormWrapper>
				<AddUserAvatar user={user} />
				<div className="new-user-right-column"></div>
			</UserFormWrapper>
		</>
	);
};

const UserFormWrapper = styled.div`
	padding: 40px 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;

	.new-user-left-column {
		display: flex;
		flex-direction: column;
		gap: 8px;
		border-radius: 6px;
		box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
		background-color: white;
	}

	.new-user-right-column {
		display: flex;
		flex-direction: column;
		gap: 8px;
		border-radius: 6px;
		box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
		background-color: white;
	}
`;
