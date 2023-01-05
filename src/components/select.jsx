import styled from "styled-components";

export const Select = ({ data, selectHandle }) => {
	return (
		<StyledSelectMenu>
			<select className="select-menu-container" onChange={selectHandle}>
				<option value="0">Choose option...</option>
				{data.map((currentItem, index) => (
					<option
						value={(10 / data.length) * (index + 1)}
						key={currentItem + index}
					>
						{currentItem}
					</option>
				))}
			</select>
		</StyledSelectMenu>
	);
};

const StyledSelectMenu = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	.select-menu-container {
		margin-top: 4px;
		padding: 11.25px 8px;
		border-radius: 6px;
		border: 1px solid #c3b7b7;
	}

	.select-menu-container:focus-visible {
		outline: none;
	}
`;
