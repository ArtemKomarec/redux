import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../header";
import { UserFullInfo } from "./user-full-info";
import { UserProgress } from "./user-progress";
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
					<UserSocials socials={user.state} />
				</div>
				<div className="right-column-wrap">
					<UserFullInfo user={user.state}></UserFullInfo>
					<UserProgress user={user.state} />
				</div>
			</StyledUserPage>
		</>
	);
};

const StyledUserPage = styled.div`
	padding: 40px 0px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #e2e8f0;
	gap: 20px;

	.left-column-wrap {
		max-width: 350px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.right-column-wrap {
		max-width: 730px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
`;
