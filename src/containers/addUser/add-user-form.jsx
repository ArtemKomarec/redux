import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { UserMainInfo } from "./user-main-info";
import { UserAdditionalInfo } from "./user-additional-info";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { UserAddAvatar } from "./user-add-avatar";
import { phoneRegExp } from "../../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { userAddAction } from "../../store/actionCreators/users";

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

	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);

	const addUserSchema = Yup.object().shape({
		username: Yup.string()
			.min(2, "Username should be more then 2 letters")
			.max(30, "Username should be less then 30 letters")
			.required("Required"),
		email: Yup.string().email("Invalid email").required("Required"),
		age: Yup.number()
			.typeError("Age must be a number")
			.required("Required")
			.positive("Age must be posititve number")
			.min(18, "Age must be 18 or more")
			.max(60, "Age must be 60 or less"),
		phone: Yup.string()
			.required("Required")
			.matches(phoneRegExp, "Phone type example +375296883822"),
		profession: Yup.string()
			.required("Required")
			.min(4, "Profession should be more then 4 letters")
			.max(30, "Profession should be less then 30 letters"),
		city: Yup.string()
			.required("Required")
			.min(2, "Profession should be more then 2 letters")
			.max(50, "Profession should be less then 50 letters"),
	});

	return (
		<>
			<Header />
			<UserFormWrapper>
				<Formik
					initialValues={{
						username: "",
						email: "",
						age: "",
						phone: "",
						profession: "",
						city: "",
					}}
					validationSchema={addUserSchema}
					onSubmit={(values) => {
						setUser((user) => {
							dispatch(
								userAddAction(
									{
										...user,
										name: values.username,
										age: values.age,
										email: values.email,
										phone: values.phone,
										profession: values.profession,
										city: values.city,
									},
									id
								)
							);
							return {
								...user,
								name: values.username,
								age: values.age,
								email: values.email,
								phone: values.phone,
								profession: values.profession,
								city: values.city,
							};
						});
					}}
				>
					{({ values, errors, touched }) => (
						<>
							<Form className="user-form">
								<div className="user-main-info">
									<UserAddAvatar user={user} setUser={setUser} />
									<UserMainInfo
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
