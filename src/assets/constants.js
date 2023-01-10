import * as Yup from "yup";

export const englishLvl = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const sortByAge = [
	{
		type: "ageAsc",
		text: "Show age in ascending order",
	},
	{
		type: "ageDesc",
		text: "Show age in descending order",
	},
];
export const sortBySkills = [
	{
		type: "skillsAsc",
		text: "Show age in ascending order",
	},
	{
		type: "skillsDesc",
		text: "Show age in descending order",
	},
];

export const phoneRegExp = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
export const urlRegExp =
	/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!&',;=]|:|@)|\/|\?)*)?$/i;

export const addUserSchema = Yup.object().shape({
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
	website: Yup.string().matches(urlRegExp, "invalid website url"),
	github: Yup.string().matches(urlRegExp, "invalid gihtub url"),
	instagram: Yup.string().matches(urlRegExp, "invalid instagram url"),
	facebook: Yup.string().matches(urlRegExp, "invalid facebook url"),
	experience: Yup.number()
		.typeError("Age must be a number")
		.required("Required")
		.positive("Age must be posititve number")
		.min(0, "Age must be 0 or more")
		.max(10, "Age must be 10 or less"),
	// english: values.english,
	communication: Yup.number()
		.typeError("Age must be a number")
		.required("Required")
		.positive("Age must be posititve number")
		.min(0, "Age must be 0 or more")
		.max(10, "Age must be 10 or less"),
	professionSkills: Yup.number()
		.typeError("Age must be a number")
		.required("Required")
		.positive("Age must be posititve number")
		.min(0, "Age must be 0 or more")
		.max(10, "Age must be 10 or less"),
});
