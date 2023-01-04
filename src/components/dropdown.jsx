import { useMemo, useState } from "react";
import styled from "styled-components";
import { Sorting } from "../assets/icons/sorting";

export const Dropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const openDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const DropwdownList = () =>
		useMemo(() => (
			<StyledDropdownList>
				<div className="sort-item">Sort by age</div>
				<div className="sort-item">Sort by skills</div>
				<div className="sort-item">Sort by name</div>
				<div className="sort-item">Sort by english</div>
			</StyledDropdownList>
		));

	return (
		<div>
			<StyledDropdownButton onClick={openDropdown}>
				<Sorting />
			</StyledDropdownButton>
			{dropdownOpen && <DropwdownList />}
		</div>
	);
};

const StyledDropdownButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

const StyledDropdownList = styled.div`
	padding: 8px 20px;
	position: absolute;
	top: 0;
	right: 50px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-radius: 6px;
	background-color: #00a8ff;
	color: white;
	.sort-item {
		width: 100%;
		padding: 2px 0px;
		border-bottom: 2px solid #00a8ff;
		font-weight: 500;
		text-align: left;
		cursor: pointer;
	}
	.sort-item:hover {
		padding: 2px 0px;
		border-bottom: 2px solid white;
		transition: ease-out 0.3s;
	}
`;
