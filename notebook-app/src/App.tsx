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

  previous = () => {
    this.props.socket.request("/previous", {});
  }

  next = () => {
    this.props.socket.request("/next", {});
  }

  render() {
    return <div>
      <style type="text/css">{AppCSS}</style>
      <span>Hello world</span><br />
      <button onClick={this.previous}>Previous</button>
      <button style={{marginLeft: 8}} onClick={this.next}>Next</button>
    </div>;
  }
}
