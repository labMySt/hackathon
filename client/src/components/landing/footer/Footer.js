import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">About Us</h4>
                </div>
                <div className="info-sec">
                  <p>
                    Praesent convallis tortor et enim laoreet, vel consectetur
                    purus latoque penatibus et dis parturient.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Quick Links</h4>
                </div>
                <div className="info-sec">
                  <ul className="quick-info">
                    <li>
                      <a href="index.html">
                        <i className="fa fa-circle" />Home
                      </a>
                    </li>
                    <li>
                      <a href="#service">
                        <i className="fa fa-circle" />Service
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        <i className="fa fa-circle" />Appointment
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Follow us</h4>
                </div>
                <div className="info-sec">
                  <ul className="social-icon">
                    <li className="bglight-blue">
                      <i className="fa fa-facebook" />
                    </li>
                    <li className="bgred">
                      <i className="fa fa-google-plus" />
                    </li>
                    <li className="bgdark-blue">
                      <i className="fa fa-linkedin" />
                    </li>
                    <li className="bglight-blue">
                      <i className="fa fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                © Copyright Medilab Theme. All Rights Reserved
                <div className="credits">
                  {/*
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Medilab
        */}
                  Designed by{" "}
                  <a href="https://bootstrapmade.com/">BootstrapMade.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
