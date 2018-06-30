import React, { Component } from 'react';

class SectionOfOffers extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
         <h3>SectionOfOffers Page</h3>
         {auth ? ' two div-work' : ' one div-work'}
      </div>
    );
  }
}

export default SectionOfOffers;
