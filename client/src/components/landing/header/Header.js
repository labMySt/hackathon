import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>

      <nav className="navbar navbar-default navbar-fixed-top" id="header">
        <div className="container">
          <div className="col-md-12">
            <div className="navbar-header">
            <div className="headel-slogan">
              <a href="/">who are you?</a>
            </div>
            </div>
            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><a href="/">Головна</a></li>
                <li><a href="/test">Пройти тест</a></li>
                <li><a href="#testimonial">Про нас</a></li>
                <li><a href="/trainee_cabinet">Кабінет</a></li>
                <li><a href="/signin">Увійти/Реєстрація</a></li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
const mapStateToHeaderProps = (state) => {
  return{ user: state.user,
          authFatching: state.authFatching}
};

export default connect(mapStateToHeaderProps)(Header);
