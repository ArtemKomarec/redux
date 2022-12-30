import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./header";
import { Pagination } from "./pagination";

function UsersList() {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

	const allUsers = useSelector(({ users }) => users);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = allUsers.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const nextPage = () => {
		console.log(allUsers.length / postsPerPage);
		if (currentPage !== allUsers.length / postsPerPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<>
			<Header />
			<StyledUsersList>
				<div className="user-list-title">
					<h1>Users</h1>
					<h2>List of users in the platform</h2>
				</div>
				<div className="users-list-container">
					{currentPosts.map((user, index) => (
						<Link
							className="visit-profile-link"
							to={`/users/${user.id}`}
							state={user}
							key={user + index}
						>
							<div className="user-list-card" key={user.name + index}>
								<img
									className="card-avatar"
									src={user.avatar}
									alt={user.name}
								/>
								<div className="user-info">
									<p className="user-name">{user.name}</p>
									<p className="user-age">age: {user.age}</p>
									<p className="user-profession">{user.profession}</p>
									<div></div>
								</div>
							</div>
						</Link>
					))}
				</div>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={allUsers.length}
					paginate={paginate}
					previousPage={previousPage}
					nextPage={nextPage}
				/>
			</StyledUsersList>
		</>
	);
}

const StyledUsersList = styled.div`
	max-width: 1500px;
	width: 100%;
	margin: 0 auto;
	padding: 40px 0px;
	display: flex;
	flex-direction: column;

	h1,
	h2 {
		margin: 0;
	}

	h1 {
		font-size: 42px;
		font-weight: 600;
	}

	h2 {
		margin-top: 4px;
		font-size: 28px;
		font-weight: 500;
		color: #3b3c3d;
	}

	.users-list-container {
		width: 100%;
		margin-top: 40px;
		display: grid;
		justify-content: space-between;
		grid-template-columns:
			minmax(340px, max-content)
			repeat(auto-fill, 340px);
		row-gap: 30px;
	}

	.user-list-card {
		height: 120px;
		padding: 20px;
		display: flex;
		flex-direction: row;
		gap: 30px;
		border-radius: 6px;
		background: white;
	}

	.user-list-card:hover {
		cursor: pointer;
		box-shadow: 0 10px 10px 0 rgb(0 0 0 / 10%), 0 10px 10px 0 rgb(0 0 0 / 10%);
		transition-duration: 0.3s;
	}

	.visit-profile-link {
		text-decoration: none;
	}

	.card-avatar {
		width: 90px;
		height: 90px;
		border-radius: 50%;
	}

	.user-info {
		padding: 14px 0px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.user-info p {
		margin: 0;
		color: black;
	}

	.user-name {
		font-size: 22px;
		font-weight: 900;
	}

	.user-card-info {
		color: #3b3c3d;
	}
`;

export default React.memo(UsersList);
