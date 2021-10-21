// @flow

import React from "react";

type Props = {
  label: string,
  handleClick: Function,
};

const Button = ({ label, handleClick }: Props): React$Element<any> => (
  <button
    onClick={handleClick}
    className="btn btn-primary"
    type="button"
    role="button"
  >
    {label}
  </button>
);

export default Button;
