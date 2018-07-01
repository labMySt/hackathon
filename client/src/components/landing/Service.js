import React, { Component } from 'react';

class Service extends Component {

    render() {
      return (
      <section id="service" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <h2 className="ser-title">Наші сервіси</h2>
              <hr className="botm-line" />
              <p>Ми - це платформа, що дозволяє здобути унікальний досвід, визначитись із професією і відразу обрати заклад навчання
              для підготовки</p>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-info">
                <div className="icon">
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </div>
                <div className="icon-info">
                  <h4>Вибирай навчальний заклад</h4>
                  <p>Вибери навчальний заклад відразу після проходження практики, та здобудь професію мрії у провідних українських та закордонних закладах.</p>
                </div>
              </div>
              <div className="service-info">
                <div className="icon">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                </div>
                <div className="icon-info">
                  <h4>Забронюй практику</h4>
                  <p>Вибрав професію та не знаєш чи це насправді те, що тобі потрібно? Пройди практику, в організації яку ти вибрав, до початку навчання.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="service-info">
                <div className="icon">
                <i className="fa fa-compress" aria-hidden="true"></i>
                </div>
                <div className="icon-info">
                  <h4>Знаходь партнерів</h4>
                  <p>Ти підприємець та не знаєш де знайти підготовлених спеціалістів? Ти це навчальний заклад який планує влаштувати своїх студентів. Це можливо зробити у нас.</p>
                </div>
              </div>
              <div className="service-info">
                <div className="icon">
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                </div>
                <div className="icon-info">
                  <h4>Просувай свою справу</h4>
                  <p>Основновна наша аудиторія - молодь, котра хоче змінювати себе, змінювати світ. Це рушійна сила, що допоможе тобі продвинути твої ідеї.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
