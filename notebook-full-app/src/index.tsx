import { Provider } from "mobx-react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  AppWrapper,
  RecordTunnel,
  ReplayTunnel,
  Socket,
  Tunnel,
} from "./library";
import { AppStore } from "./models";

// exposing the function to call it from outside
(window as any).renderApp = (
  containerId: string,
  tunnel: Tunnel,
  defaultProps?: { [prop: string]: any }
) => {
  if (defaultProps === undefined) {
    defaultProps = {};
  }

  let container = document.getElementById(containerId);
  if (container === null) {
    console.error("Invalid container id");
    return;
  }

  let enableLogging = true;
  let shadow = container.attachShadow({ mode: "open" });
  let socket = new Socket(tunnel, 60000, enableLogging);
  let store = new AppStore(socket, defaultProps as any);

  store.setProps({ root: shadow });

  ReactDOM.render(
    <Provider store={store}>
      <AppWrapper socket={socket} store={store as any} App={App} />
    </Provider>,
    shadow
  );
}

(window as any).renderDevApp = (
  containerId: string,
  tunnel: Tunnel,
  defaultProps?: { [prop: string]: any }
) => {
  let recordTunnel = new RecordTunnel(tunnel);
  (window as any).recordTunnel = recordTunnel;
  console.log("renderDev");
  (window as any).renderApp(containerId, recordTunnel, defaultProps);
};

// render the app when debugging
if (process.env.REACT_APP_DEV === "yes") {
  let hist = require("./replayDebugData").history;
  (window as any).renderApp("root", new ReplayTunnel(hist));
}