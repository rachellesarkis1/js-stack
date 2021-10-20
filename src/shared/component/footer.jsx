/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import React from "react";
import { APP_NAME } from "../config";

// $FlowIgnore
const Footer = () => (
  <div className="container mt-5">
    <hr />
    <footer>
      <p>©{APP_NAME} 2017</p>
    </footer>
  </div>
);

export default Footer;
