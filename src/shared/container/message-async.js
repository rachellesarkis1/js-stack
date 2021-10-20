// @flow

import { connect } from "react-redux";

import MessageAsync from "../component/message";

const mapStateToProps = (state) => ({
  message: state.hello.get("messageAsync"),
});
// $FlowIgnore
export default connect(mapStateToProps)(MessageAsync);
