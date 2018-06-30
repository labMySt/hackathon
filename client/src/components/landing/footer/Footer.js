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
                  <h4 className="white no-padding">Про Нас</h4>
                </div>
                <div className="info-sec">
                  <p>
                    Група молодих ентузіастів котрі прагнуть допомогти кожному знайти себе в світі повному можливостей.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Швидкі посилання</h4>
                </div>
                <div className="info-sec">
                  <ul className="quick-info">
                    <li>
                      <a href="#banner">
                        <i className="fa fa-circle" />На головну
                      </a>
                    </li>
                    <li>
                      <a href="/test">
                        <i className="fa fa-circle" />Пройти тест
                      </a>
                    </li>
                    <li>
                      <a href="/ivents">
                        <i className="fa fa-circle" />Події
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 marb20">
                <div className="ftr-tle">
                  <h4 className="white no-padding">Спільнота</h4>
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
                © імені Валентина Стрикала
                <div className="credits">
                  {/*
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Medilab
        */}
                  Спроектований{" "}
                  <a href="https://intita.com/">В-Стрикало.com</a>
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
