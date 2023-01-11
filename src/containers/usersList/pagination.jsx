import styled from "styled-components";
import { PaginationArrow } from "../../assets/icons/pagination-arrow";

export const Pagination = ({
	postsPerPage,
	paginate,
	nextPage,
	previousPage,
	currentPage,
	allUsers,
	pagesList,
}) => {
	return (
		<StyledPagination>
			<ul className="pagination-list">
				<StyledPreviousArrow onClick={previousPage} currentPage={currentPage}>
					<PaginationArrow />
				</StyledPreviousArrow>

				{pagesList.map((currentNumber) => (
					<StyledListNumber
						key={currentNumber}
						className="pagination-item"
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
	display: flex;

	align-items: center;
	border-radius: 6px;
	background: white;
	cursor: pointer;

	svg {
		fill: #00a8ff;
	}

	&:hover {
		background-color: ${(props) =>
			props.currentPage !== Math.ceil(props.allUsers / props.postsPerPage)
				? "#00a8ff"
				: "#c6c6c6"};
		cursor: ${(props) =>
			props.currentPage !== Math.ceil(props.allUsers / props.postsPerPage)
				? "pointer"
				: "not-allowed"};
		color: white;
		transition: all 0.5s ease;

		svg {
			fill: white;
		}
	}

	&:active {
		background-color: ${(props) =>
			props.currentPage !== Math.ceil(props.allUsers / props.postsPerPage)
				? "#00a8ff"
				: "#c6c6c6"};

		svg {
			fill: ${(props) =>
				props.currentPage !== Math.ceil(props.allUsers / props.postsPerPage)
					? "#00a8ff"
					: "white"};
		}
	}
`;

const StyledPreviousArrow = styled(StyledNextArrow)`
	display: flex;

	&:hover {
		background-color: ${(props) =>
			props.currentPage !== 1 ? "#00a8ff" : "#c6c6c6"};
		color: white;
		transition: all 0.5s ease;
		cursor: ${(props) => (props.currentPage !== 1 ? "pointer" : "not-allowed")};

		svg {
			fill: white;
		}
	}

	transform: rotate(0.5turn);
`;
