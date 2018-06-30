import React, { Component } from "react";
import Welcome from "./Welcome";
import Service from "./Service";
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
        <Welcome />
        <Service />
        <Partners />
      </div>
    );
  }
}

export default Main;
