import React from "react";
import AddFriendInput from "./add-friend-input";
import Friends from "./friends";

function FriendListApp() {
	return (
		<div
			style={{
				width: "400px",
				margin: "40px auto",
				padding: "20px",
				border: "2px solid #c3b7b7",
			}}
		>
			<h1 style={{ textAlign: "center" }}>Friends list</h1>
			<AddFriendInput />
			<Friends />
		</div>
	);
}

export default React.memo(FriendListApp);
