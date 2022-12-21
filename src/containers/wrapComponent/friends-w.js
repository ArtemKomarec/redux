import { connect } from "react-redux";
import { MapDispatchToProps } from "../../store/mapDispatchToProps";
import { MapStateToProps } from "../../store/mapStateToProps";
import Friends from "../friends";

const FriendsW = connect(
	MapStateToProps("delete"),
	MapDispatchToProps("delete")
)(Friends);

export default FriendsW;
