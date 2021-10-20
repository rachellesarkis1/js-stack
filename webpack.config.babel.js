// @flow

import path from "path";

import webpack from "webpack";
import { WDS_PORT } from "./src/shared/config";
import { isProd } from "./src/shared/util";

export default {
  entry: ["react-hot-loader/patch", "./src/client"],
  output: {
    filename: "js/bundle.js",
    // $FlowIgnore
    path: path.resolve(__dirname, "dist"),
    // $FlowIgnore
    publicPath: isProd ? "/static/" : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      // $FlowIgnore
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  // $FlowIgnore
  devtool: isProd ? false : "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    // $FlowIgnore
    new webpack.HotModuleReplacementPlugin(),
    // $FlowIgnore
    new webpack.NoEmitOnErrorsPlugin(),
    // $FlowIgnore
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
