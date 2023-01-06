import { useEffect, useState } from "react";
import styled from "styled-components";

export const UserAddAvatar = ({ user, setUser }) => {
	const [userImage, setUserImage] = useState(null);

	const handleUploadImage = (e) => {
		setUserImage(e.target.files[0]);
	};

	useEffect(() => {
		if (userImage) {
			const image = URL.createObjectURL(userImage);
			setUser({ ...user, avatar: image });
		}
	}, [userImage]);

	return (
		<StyledUserAvatar>
			<img
				className="new-user-avatar"
				src={user.avatar}
				alt={user.name + "avatar"}
			/>
			<label htmlFor="upload-image">
				<span className="new-user-avatar-btn">Upload image</span>
			</label>
		</StyledUserAvatar>
	);
};

const StyledUserAvatar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	.new-user-avatar {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-bottom: 14px;
	}

	.new-user-avatar-btn {
		width: 170px;
		padding: 6px 20px;
		border-radius: 4px;
		border: 2px solid #465374;

		color: #e2e8f0;
		background-color: #465374;
		transition: 0.4s ease;

		font-family: 500;
		letter-spacing: 0.6px;
		cursor: pointer;
	}

	.new-user-avatar-btn:hover {
		background-color: white;
		color: #465374;
	}
`;
