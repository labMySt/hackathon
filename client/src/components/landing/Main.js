import React, { Component } from 'react';
import MainAuth from './MainAuth';
import Welcome from './Welcome';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    }
  }

  render() {
    const { auth } = this.state;
    return (
      <div>
        {auth ? <MainAuth auth={auth}/> : <Welcome auth={auth}/>}
      </div>
    );
  }
}

export default Main;
