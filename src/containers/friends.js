import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	userDeleteAction,
	userFavouriteAction,
} from "../store/actionCreators/users";

function Friends() {
	const dispatch = useDispatch();
	const allUsers = useSelector(({ users }) => users);
	return (
		<>
			{allUsers.map((user, index) => (
				<div
					key={user.name + index}
					style={{
						display: "flex",
						flexDirection: "row",
						gap: "40px",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{ width: "200px", display: "flex", flexDirection: "column" }}
					>
						<h4 style={{ margin: "14px 0px" }}>{user.name}</h4>
						<p style={{ margin: "4px 0px" }}>
							Friend: {user.friend ? "yes" : "no"}
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							gap: "8px",
						}}
					>
						<button
							style={{ height: "20px", width: "100px" }}
							onClick={() => dispatch(userFavouriteAction(index, user.friend))}
						>
							{user.friend ? "remove friend" : "make friend"}
						</button>
						{/* -------- */}
						<button
							style={{ height: "20px" }}
							onClick={() => dispatch(userDeleteAction(index))}
						>
							Delete
						</button>
					</div>
					{/* <button style={{ height: "20px" }}>Star</button> */}
				</div>
			))}
		</>
	);
}

export default React.memo(Friends);
