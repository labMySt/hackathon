import React, { Component } from "react";

class Testing extends Component {
  render() {
    return (
      <section id="service" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <h2 className="ser-title">Про тест</h2>
              <hr className="botm-line" />
              <p>
                Методика Д. Голанда визначає ступінь зв`язку типу особистості з
                сферою професійної діяльності, до якої у неї природні нахили.
                Люди переважно прагнуть знайти середовище і професію, які
                дозволили б їм краще розкрити свої здібності, виразити свої
                інтереси, цінності орієнтації.
              </p>
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="service-info">
                <div className="icon">
                  <i className="fa fa-question-circle mx-2" />
                  <span className="">1 з 42</span>
                </div>
                <h4>Виберіть</h4>
                <button className="btn btn-appoint btn-lg btn-block">
                  <h2 className="section-title white lg-line">Інженер</h2>
                </button>
              </div>
              <h4>або</h4>
              <button className="btn btn-appoint btn-lg btn-block">
                <h2 className="section-title white lg-line">Конструктор</h2>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testing;
