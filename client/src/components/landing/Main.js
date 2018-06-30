import React, { Component } from "react";
import MainAuth from "./MainAuth";
import Welcome from "./Welcome";
import Partners from "./Partners";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  render() {
    const { auth } = this.state;
    return (
      <div>
        <div>{auth ? <MainAuth auth={auth} /> : <Welcome auth={auth} />}</div>
        <Partners />
      </div>
    );
  }
}

export default Main;
