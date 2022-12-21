import AddFrienInputW from "./wrapComponent/add-friend-input-w";
import FriendsW from "./wrapComponent/friends-w";
import React from "react";

export const FriendListApp = () => {
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
			<AddFrienInputW />
			<FriendsW />
		</div>
	);
};
