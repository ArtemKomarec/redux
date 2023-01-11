import { useState } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { UserMainInfo } from "./user-main-info";
import { UserSkillsInfo } from "./user-skills-info";
import { Form, Formik } from "formik";
import { UserAddAvatar } from "./user-add-avatar";
import { addUserSchema } from "../../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { userAddAction } from "../../store/actionCreators/users";
import { UserSocialLinks } from "./user-social-links";
import { toast } from "react-toastify";

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
		website: "",
		github: "",
		instagram: "",
		facebook: "",
		experience: "",
		english: "",
		communication: "",
		professionSkills: "",
	});

	const dispatch = useDispatch();
	const id = useSelector(({ users }) => users.length);

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
						website: "",
						github: "",
						instagram: "",
						facebook: "",
						experience: "",
						english: "",
						communication: "",
						professionSkills: "",
					}}
					validationSchema={addUserSchema}
					onSubmit={(values, { resetForm }) => {
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
										website: values.website,
										github: values.github,
										instagram: values.instagram,
										facebook: values.facebook,
										experience: values.experience,
										english: values.english,
										communication: values.communication,
										professionSkills: values.professionSkills,
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
								website: values.website,
								github: values.github,
								instagram: values.instagram,
								facebook: values.facebook,
								experience: values.experience,
								english: values.english,
								communication: values.communication,
								professionSkills: values.professionSkills,
							};
						});
						toast.success("User was added");
						resetForm();
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
								<div className="user-additional-info">
									<h1 className="user-additional-header">Social links</h1>
									<UserSocialLinks
										values={values}
										errors={errors}
										touched={touched}
									/>
									<StyledDivider />
									<UserSkillsInfo
										values={values}
										errors={errors}
										touched={touched}
									/>
								</div>
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

	.user-additional-info {
		max-width: 700px;
		width: 100%;
		padding: 20px 30px;
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
		background-color: white;
	}
	.divider {
	}
`;

const StyledDivider = styled.div`
	width: 100%;
	height: 2px;
	margin-top: 48px;
	background-color: #465374;
`;
