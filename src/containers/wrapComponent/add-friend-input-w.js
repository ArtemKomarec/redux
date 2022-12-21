import { connect } from "react-redux";
import { MapDispatchToProps } from "../../store/mapDispatchToProps";
import { MapStateToProps } from "../../store/mapStateToProps";
import AddFriendInput from "../add-friend-input";

const AddFrienInputW = connect(
	MapStateToProps("add-friend"),
	MapDispatchToProps("add-friend")
)(AddFriendInput);

export default AddFrienInputW;
