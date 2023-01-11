import { Field } from "formik";
import styled from "styled-components";

export const Select = ({ data }) => {
	return (
		<StyledSelectMenu>
			<Field className="select-menu-container" as="select" name="english">
				{data.map((currentItem, index) => (
					<option
						value={(10 / data.length) * (index + 1)}
						key={currentItem + index}
					>
						{currentItem}
					</option>
				))}
			</Field>
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
