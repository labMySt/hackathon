import React, { Component } from 'react';
import Slider from './Slider';
import MainAuth from './MainAuth';

class Welcome extends Component {

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h3>Welcome Page</h3>
        <Slider/>
        <MainAuth auth={auth} />
      </div>
    );
  }
}

export default Welcome;
