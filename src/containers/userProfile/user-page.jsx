import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../header";
import { UserFullInfo } from "./user-full-info";
import { UserShortInfo } from "./user-short-info";
import { UserSocials } from "./user-socials";

export const UserPage = () => {
	const user = useLocation();
	return (
		<>
			<Header />
			<StyledUserPage>
				<div className="left-column-wrap">
					<UserShortInfo user={user.state} />
					<UserSocials socials={user.state.socials} />
				</div>
				<div className="right-column-wrap">
					<UserFullInfo user={user.state}></UserFullInfo>
					<div></div>
				</div>
			</StyledUserPage>
		</>
	);
};

const StyledUserPage = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #e2e8f0;
	gap: 20px;

	.left-column-wrap {
		max-width: 350px;
		width: 100%;
		padding: 40px 0px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.right-column-wrap {
		max-width: 730px;
		width: 100%;
		padding: 40px 0px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
`;
