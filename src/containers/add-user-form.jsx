import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { userAddAction } from "../store/actionCreators/users";

export const AddUserForm = () => {
	const [user, setUser] = useState({
		name: "",
		surname: "",
		age: "",
		profession: "",
	});
	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);
	const handleSubmit = () => {
		console.log(user);
		if (user.name.match(/^\s*$/) || user.name === "") {
			// e.target.value.match(/^(1[4-9]|[2-9]\d)$/gm
		} else {
			dispatch(userAddAction({ user, id }));
			setUser({ name: "", surname: "", age: "", profession: "" });
		}
	};
	return (
		<UserFormWrapper>
			<h1>Fill user profile</h1>
			<input
				className="add-user-field"
				placeholder="Type user name"
				value={user.name}
				onChange={(e) =>
					setUser((newUser) => {
						newUser.name = e.target.value;
						return { ...newUser };
					})
				}
			/>
			<input
				className="add-user-field"
				placeholder="Type user surname"
				value={user.surname}
				onChange={(e) =>
					setUser((newUser) => {
						newUser.surname = e.target.value;
						return { ...newUser };
					})
				}
			/>
			<input
				className="add-user-field"
				placeholder="Type user age"
				value={user.age}
				onChange={(e) =>
					setUser((newUser) => {
						newUser.age = e.target.value;
						return { ...newUser };
					})
				}
			/>
			<input
				className="add-user-field"
				placeholder="Type user profession"
				value={user.profession}
				onChange={(e) =>
					setUser((newUser) => {
						newUser.profession = e.target.value;
						return { ...newUser };
					})
				}
			/>
			{/* <input
				className="add-user-field"
				placeholder="Friend or not?"
				value={user.name}
				onChange={(e) => setUser({ name: e.target.value })}
			/> */}
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
`;
