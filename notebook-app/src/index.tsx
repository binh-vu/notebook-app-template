import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  RecordTunnel,
  ReplayTunnel,
  Socket,
  Tunnel,
} from "./library";

// exposing the function to call it from outside
(window as any).renderApp = (
  containerId: string,
  tunnel: Tunnel,
  shadowDOM?: boolean
) => {
  let container = document.getElementById(containerId);
  if (container === null) {
    console.error("Invalid container id");
    return;
  }

  let enableLogging = true;
  let shadow = shadowDOM === false ? container : container.attachShadow({ mode: "open" });
  let socket = new Socket(tunnel, 60000, enableLogging);

  ReactDOM.render(
    <App socket={socket} />,
    shadow
  );
}

(window as any).renderDevApp = (
  containerId: string,
  tunnel: Tunnel,
  shadowDOM?: boolean
) => {
  // turn the tunnel to a recorded one and expose it for debugging
  let recordTunnel = new RecordTunnel(tunnel);
  (window as any).recordTunnel = recordTunnel;
  (window as any).renderApp(containerId, recordTunnel, shadowDOM);
};

// render the app when debugging
if (process.env.REACT_APP_DEV === "yes") {
  let hist = require("./replayDebugData").history;
  (window as any).renderApp("root", new ReplayTunnel(hist));
}