// @flow
import React from "react";

type Props = {
  message: string,
};
// $FlowIgnore
const Message = ({ message }: Props) => <p>{message}</p>;

export default Message;
