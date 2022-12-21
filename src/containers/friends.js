import React from "react";

function Friends(props) {
	console.log(props);
	const allFriends = props.state.deleteFriends;

	const handleDelete = () => {
		// console.log(props.delete.friendsById[0].id);
		props.delete_human("a");
	};

	return (
		<>
			{allFriends.map((friend) => (
				<div
					key={friend.name}
					style={{
						display: "flex",
						flexDirection: "row",
						gap: "40px",
						alignItems: "center",
					}}
				>
					<div
						style={{ width: "200px", display: "flex", flexDirection: "column" }}
					>
						<h4 style={{ margin: "14px 0px" }}>{friend.name}</h4>
						<p style={{ margin: "4px 0px" }}>s</p>
					</div>
					<button style={{ height: "20px" }} onClick={handleDelete}>
						Delete
					</button>
					{/* <button style={{ height: "20px" }}>Star</button> */}
				</div>
			))}
		</>
	);
}

export default Friends;
