import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				gap: "12px",
			}}
		>
			<input
				style={{
					width: "394px",
					borderTop: "0px",
					borderLeft: "0px",
					borderRight: "0px",
					borderBottom: "2px solid #c3b7b7",
				}}
				placeholder="Type friend name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button style={{ width: 90 }} onClick={handleSubmit}>
				add user
			</button>
		</div>
	);
}

export default React.memo(AddFriendInput);
