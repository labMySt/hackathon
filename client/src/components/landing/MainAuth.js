import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import SectionOfOffers from './SectionOfOffers';

class MainAuth extends Component {
  render() {
      const { auth } = this.props;
    return (
      <div>
          <h3>MainAuth Page</h3>
          <GoogleMap auth={auth} />
          <SectionOfOffers auth={auth} />
      </div>
    );
  }
}

export default MainAuth;
