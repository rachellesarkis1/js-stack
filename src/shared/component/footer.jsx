// @flow
/* eslint quotes: ["error", "double"] */
/* eslint-disable */
import React from "react";
import { APP_NAME } from "../config";

const Footer = () => (
  <div className="container mt-5">
    <hr />
    <footer>
      <p>©{APP_NAME} 2017</p>
    </footer>
  </div>
);

export default Footer;
