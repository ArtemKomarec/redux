import { useState } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { UserMainInfo } from "./user-main-info";
import { UserAdditionalInfo } from "./user-additional-info";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { UserAddAvatar } from "./user-add-avatar";
import { FieldLevelValidationExample } from "./aaa";

export const AddUserForm = () => {
	const [user, setUser] = useState({
		name: "",
		age: "",
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

	const addUserSchema = Yup.object().shape({
		username: Yup.string()
			.min(5, "Username should be more then 5 letters")
			.max(30, " Username should be less then 30 letters")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
	});

	return (
		<>
			<Header />
			<UserFormWrapper>
				<Formik
					initialValues={{
						username: "",
						email: "",
					}}
					validationSchema={addUserSchema}
					onSubmit={(values) => {
						// same shape as initial values
						console.log(values);
					}}
				>
					{({ values, errors, touched }) => (
						<>
							<Form className="user-form">
								<div className="user-main-info">
									<UserAddAvatar user={user} />
									<UserMainInfo
										user={user}
										setUser={setUser}
										values={values}
										errors={errors}
										touched={touched}
									/>
								</div>
								<UserAdditionalInfo
									user={user}
									setUser={setUser}
									values={values}
									errors={errors}
									touched={touched}
								/>
							</Form>
						</>
					)}
				</Formik>
				{/* <FieldLevelValidationExample /> */}
			</UserFormWrapper>
		</>
	);
};

const UserFormWrapper = styled.div`
	.user-form {
		padding: 40px 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}

	.user-main-info {
		max-width: 350px;
		width: 100%;
		padding: 20px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		border-radius: 6px;
		box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
		background-color: white;
	}
`;
