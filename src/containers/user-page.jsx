import { useParams } from "react-router-dom";

export const UserPage = (user) => {
	const params = useParams();
	const prodId = params.id;
	const prodName = params.name;
	return (
		<div>
			{console.log(params)}
			<h1>{prodId}</h1>
			<div>name - {prodName}</div>
		</div>
	);
};
