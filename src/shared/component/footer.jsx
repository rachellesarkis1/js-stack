/* eslint-disable react/jsx-one-expression-per-line */
// @flow
import React from "react";
import { APP_NAME } from "../config";

const Footer = (): React$Element<any> => (
  <div className="container mt-5">
    <hr />
    <footer>
      <p>©{APP_NAME} 2017</p>
    </footer>
  </div>
);

export default Footer;
