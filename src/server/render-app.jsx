// @flow

import { SheetsRegistry, JssProvider } from "react-jss";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";
import Helmet from "react-helmet";

import initStore from "./init-store";
import App from "../shared/app";
import {
  APP_CONTAINER_CLASS,
  STATIC_PATH,
  WDS_PORT,
  JSS_SSR_CLASS,
} from "../shared/config";
import { isProd } from "../shared/util";

const renderApp = (
  location: string,
  plainPartialState: ?Object,
  routerContext: ?Object = {}
): string => {
  const store = initStore(plainPartialState);
  const sheets = new SheetsRegistry();
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <JssProvider registry={sheets}>
          <App />
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  const head = Helmet.rewind();

  return `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${
          isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`
        }/js/bundle.js"></script>
      </body>
    </html>`;
};

export default renderApp;
