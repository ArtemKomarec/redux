export const PaginationArrow = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={16}
			height={16}
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="m5 3 3.057-3L20 12 8.057 24 5 21l9-9z" />
		</svg>
	);
};
