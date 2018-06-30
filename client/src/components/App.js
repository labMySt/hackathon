import React, { Component } from "react";
import Header from "./landing/Header";
import Footer from "./landing/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
