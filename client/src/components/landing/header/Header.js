import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="bg-color header-div" id="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="col-md-12">
            <div className="navbar-header">
            <div className="headel-slogan">
              who are you?
            </div>
            </div>
            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#banner">Головна</a></li>
                <li className><a href="#about">Пройти тест</a></li>
                <li className><a href="#testimonial">Про нас</a></li>
                <li className><a href="#contact">Контакти</a></li>
                <li className><a href="#contact">Увійти/Реєстрація</a></li>
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
