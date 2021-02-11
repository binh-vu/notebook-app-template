import React from "react";
import { Socket } from "./library";
import AppCSS from "./App.css";

interface Props {
  socket: Socket;
}

interface State {
}

export default class App extends React.Component<Props, State> {
  public state: State = { loading: false };

  render() {
    return <div>
      <style type="text/css">{AppCSS}</style>
      <span>Hello world</span>
    </div>;
  }
}
