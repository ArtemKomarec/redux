import { useState } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { UserMainInfo } from "./user-main-info";
import { UserAdditionalInfo } from "./user-additional-info";

export const AddUserForm = () => {
	const [user, setUser] = useState({
		name: "",
		surname: "",
		email: "",
		phone: "",
		profession: "",
		avatar:
			"https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
		city: "",
		socials: [
			{ name: "website", website: "" },
			{ name: "github", github: "" },
			{ name: "instagram", instagram: "" },
			{ name: "facebook", facebook: "" },
		],
		skills: {
			experience: "",
			english: "",
			communication: "",
			professionSkills: "",
		},
	});

	return (
		<>
			<Header />
			<UserFormWrapper>
				<UserMainInfo user={user} setUser={setUser} />
				<UserAdditionalInfo user={user} setUser={setUser} />
			</UserFormWrapper>
		</>
	);
};

const UserFormWrapper = styled.div`
	padding: 40px 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`;
