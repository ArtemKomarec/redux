import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Sorting } from "../assets/icons/sorting";
import {
	userSortByNumberAsc,
	userSortByNumberDesc,
} from "../store/actionCreators/users";

export const Dropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const dispatch = useDispatch();
	const allUsers = useSelector(({ users }) => users);

	const openDropdown = ({}) => {
		setDropdownOpen(!dropdownOpen);
	};

	const SortByAge = (e) => {
		switch (e.target.dataset.value) {
			case "ageAsc": {
				allUsers.sort(
					(secondUser, firstUser) => secondUser.age - firstUser.age
				);
				dispatch(userSortByNumberAsc(allUsers));
				setDropdownOpen(!dropdownOpen);
				break;
			}
			case "ageDesc": {
				allUsers.sort(
					(secondUser, firstUser) => firstUser.age - secondUser.age
				);
				dispatch(userSortByNumberDesc(allUsers));
				setDropdownOpen(!dropdownOpen);
				break;
			}
			case "skillsAsc": {
				allUsers.sort(
					(seconcUser, firstUser) =>
						seconcUser.skills.professionSkills -
						firstUser.skills.professionSkills
				);
				dispatch(userSortByNumberAsc(allUsers));
				setDropdownOpen(!dropdownOpen);
				break;
			}
			case "skillsDesc": {
				allUsers.sort(
					(secondUser, firstUser) => secondUser.age - firstUser.age
				);
				dispatch(userSortByNumberDesc(allUsers));
				setDropdownOpen(!dropdownOpen);
				break;
			}
			default: {
				setDropdownOpen(!dropdownOpen);
				break;
			}
		}
	};

	const DropdownList = () =>
		useMemo(() => (
			<StyledDropdownList>
				<ul className="sort-items-container" onClick={SortByAge}>
					<li data-value="ageAsc" className="sort-item">
						Sort by age ascending
					</li>
					<li data-value="ageDesc" className="sort-item">
						Sort by age decending
					</li>
					<li data-value="skillsAsc" className="sort-item">
						Sort by skills ascending
					</li>
					<li data-value="skillsDesc" className="sort-item">
						Sort by skills descending
					</li>
				</ul>
			</StyledDropdownList>
		));

	return (
		<div>
			<StyledDropdownButton onClick={openDropdown}>
				<Sorting />
			</StyledDropdownButton>
			{dropdownOpen && <DropdownList />}
		</div>
	);
};

const StyledDropdownButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;

const StyledDropdownList = styled.div`
	position: absolute;
	right: 0px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	transition: ease-out 4s;
	border-radius: 6px;
	background-color: #00a8ff;
	color: white;

	.sort-items-container {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.sort-item {
		padding: 6px 10px;
		cursor: pointer;
	}

	.sort-item:hover {
		background-color: #0083c5;
	}

	.sort-item:first-child {
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}

	.sort-item:last-child {
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;
	}
`;
