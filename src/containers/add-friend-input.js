import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { userAddAction } from "../store/actionCreators/users";

function AddFriendInput() {
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = () => {
		if (name.match(/^\s*$/) || name === "") {
		} else {
			dispatch(userAddAction({ name }));
		}
		setName("");
	};

	return (
		<AddInputWrapper>
			<input
				className="add-friend-field"
				placeholder="Type friend name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button className="add-user-btn" onClick={handleSubmit}>
				add user
			</button>
		</AddInputWrapper>
	);
}

const AddInputWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 12px;

	.add-friend-field {
		width: 394px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		border-bottom: 2px solid #c3b7b7;
	}

	.add-user-btn {
		width: 90px;
	}
`;

export default React.memo(AddFriendInput);
