import styled from "styled-components";
import { PaginationArrow } from "../../assets/icons/pagination-arrow";

export const Pagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	nextPage,
	previousPage,
	currentPage,
	allUsers,
}) => {
	const pagesList = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pagesList.push(i);
	}

	return (
		<StyledPagination>
			<ul className="pagination-list">
				<StyledPreviousArrow onClick={previousPage} currentPage={currentPage}>
					<PaginationArrow />
				</StyledPreviousArrow>
				{pagesList.map((currentNumber) => (
					<StyledListNumber
						className="pagination-item"
						key={currentNumber}
						onClick={() => paginate(currentNumber)}
						currentPage={currentPage}
						currentNumber={currentNumber}
					>
						{currentNumber}
					</StyledListNumber>
				))}
				<StyledNextArrow
					onClick={nextPage}
					currentPage={currentPage}
					allUsers={allUsers.length}
					postsPerPage={postsPerPage}
				>
					<PaginationArrow />
				</StyledNextArrow>
			</ul>
		</StyledPagination>
	);
};

const StyledPagination = styled.div`
	align-self: flex-end;

	.pagination-list {
		padding: 0;
		display: flex;
		flex-direction: row;
		gap: 12px;
		list-style: none;
	}

	.pagination-item:hover {
		background-color: #00a8ff;
		color: white;
		transition: all 0.5s ease;
	}

	.pagination-item:hover:active {
		color: #00a8ff;
		background-color: white;
		transition-duration: 0.03s;
		transition: all 0.2s ease;
	}
`;

const StyledListNumber = styled.li`
	padding: 8px 12px;
	border-radius: 6px;
	color: ${(props) =>
		props.currentPage === props.currentNumber ? "white" : "#00a8ff"};
	background-color: ${(props) =>
		props.currentPage === props.currentNumber ? "#00a8ff" : "white"};
	font-weight: 500;
	cursor: pointer;
`;

const StyledNextArrow = styled.li`
	padding: 8px 10px;

	display: ${(props) =>
		props.currentPage !== Math.ceil(props.allUsers / props.postsPerPage)
			? "flex"
			: "none"};

	align-items: center;
	border-radius: 6px;
	background: white;
	cursor: pointer;

	background-color: ${(props) =>
		props.currentPage !== props ? props.color : "#ff0"};
	svg {
		fill: #00a8ff;
	}

	&:hover {
		background-color: #00a8ff;
		color: white;
		transition: all 0.5s ease;

		svg {
			fill: white;
		}
	}

	&:active {
		background-color: white;

		svg {
			fill: #00a8ff;
		}
	}
`;

const StyledPreviousArrow = styled(StyledNextArrow)`
	display: ${(props) => (props.currentPage !== 1 ? "flex	" : "none")};

	transform: rotate(0.5turn);
`;
