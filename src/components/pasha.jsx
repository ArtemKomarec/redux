import { useState } from "react";

const pageSize = 5;
const numItems = 50;
const pageOffset = 2;
const numPages = numItems / pageSize;

export const PaginationPasha = () => {
	const [currPage, setCurrPage] = useState(0);

	const nextPageHandler = () => setCurrPage((ov) => ov + 1);
	const prevPageHandler = () => setCurrPage((ov) => ov - 1);
	const setCurrentPageHandler = (pi) => setCurrPage(pi);

	if (numPages <= pageOffset * 2 || numItems <= pageSize) {
		return (
			<>
				<div>
					This page: {currPage + 1} / {numPages}
				</div>

				{currPage > 0 && <button onClick={prevPageHandler}>{"<"}</button>}

				{[...Array(numPages)].map((_, i) => {
					return (
						<button onClick={() => setCurrentPageHandler(i)} key={i}>
							{i + 1}
						</button>
					);
				})}

				{currPage < numPages - 1 && (
					<button onClick={nextPageHandler}>{">"}</button>
				)}
			</>
		);
	}

	return (
		<>
			<div>
				This page: {currPage + 1} / {numPages}
			</div>

			{currPage > 0 && <button onClick={prevPageHandler}>{"<"}</button>}

			{[...Array(pageOffset)].map((_, i) => {
				const offset =
					currPage + 1 < numPages - pageOffset
						? currPage + i
						: numPages - pageOffset * 2 + i;

				return (
					<button onClick={() => setCurrentPageHandler(offset)} key={i}>
						{offset + 1}
					</button>
				);
			})}

			{currPage < numPages - pageOffset * 2 && " ... "}

			{[...Array(pageOffset)].map((_, i) => {
				return (
					<button
						onClick={() => setCurrentPageHandler(numPages - pageOffset + i)}
						key={i}
					>
						{numPages - pageOffset + i + 1}
					</button>
				);
			})}

			{currPage < numPages - 1 && (
				<button onClick={nextPageHandler}>{">"}</button>
			)}
		</>
	);
};
