import React, { Component } from "react";

class Partners extends Component {
  render() {
    return (
      <section id="testimonial" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="ser-title">Наші партнери:</h2>
              <hr className="botm-line" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="testi-details">
                {/* Paragraph */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="testi-info">
                {/* User Image */}
                <a href="#">
                  <img src="img/ria.png" className="img-responsive" />
                </a>
                {/* User Name */}
                <h3>
                  RIA<span />
                </h3>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="testi-details">
                {/* Paragraph */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="testi-info">
                {/* User Image */}
                <a href="#">
                  <img src="img/int.png" className="img-responsive" />
                </a>
                {/* User Name */}
                <h3>
                  INTITA<span />
                </h3>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="testi-details">
                {/* Paragraph */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="testi-info">
                {/* User Image */}
                <a href="#">
                  <img src="img/rb.png" className="img-responsive" />
                </a>
                {/* User Name */}
                <h3>
                  Robota Molodi<span />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Partners;
