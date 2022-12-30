import styled from "styled-components";
import { PaginationArrow } from "../assets/icons/pagination-arrow";

export const Pagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	nextPage,
	previousPage,
}) => {
	const pagesList = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pagesList.push(i);
	}

	return (
		<StyledPagination>
			<ul className="pagination-list">
				<StyledPreviousArrow onClick={previousPage}>
					<PaginationArrow />
				</StyledPreviousArrow>
				{pagesList.map((currentNumber) => (
					<li
						className="pagination-item"
						key={currentNumber}
						onClick={() => paginate(currentNumber)}
					>
						{currentNumber}
					</li>
				))}
				<StyledNextArrow onClick={nextPage}>
					<PaginationArrow />
				</StyledNextArrow>
			</ul>
		</StyledPagination>
	);
};

const StyledPagination = styled.div`
	.pagination-list {
		padding: 0;
		display: flex;
		flex-direction: row;
		gap: 12px;
		list-style: none;
	}

	.pagination-item {
		padding: 8px 12px;
		border-radius: 6px;
		color: #00a8ff;
		background: white;
		font-weight: 500;
		cursor: pointer;
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
	transform: rotate(0.5turn);
`;
