import React, { Component } from 'react';
import './TraineeCabinet.css';
import Diagram from './Diagram';

class TraineeCabinet extends Component {
  render() {
    return (
        <div>
            <div style = {{height: "90px", backgroundColor: "#325C6A"}}></div>
            <section id="service" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <h2 className="ser-title">Профіль</h2>
                            <hr className="botm-line" />
                            <div className="trainee-profile-about">
                                <i className="fa fa-address-card fa-fw pull-left fa-2x" />
                                <div className="trainee-profile-names-div">
                                    <div>
                                        <h6>Ім'я</h6>
                                        Сергій
                                    </div>
                                    <div>
                                        <h6>Прізвище</h6>
                                        Сергієв
                                    </div>
                                </div>
                            </div>
                            <div className="space" />
                            <div className="trainee-profile-about">
                                <i className="fa fa-envelope fa-fw pull-left fa-2x" />
                                <div className="trainee-profile-names-div">
                                    <div className="trainee-profile-mail">
                                        sergiy@example.com
                                    </div>
                                    <button className="btn trainee-button-edit">
                                        <i className="fa fa-pencil fa-2x" />
                                    </button>
                                </div>
                            </div>
                            <div className="space" />
                            <div className="trainee-profile-about">
                                <i className="fa fa-phone fa-fw pull-left fa-2x" />
                                <div className="trainee-profile-names-div">
                                    <div className="trainee-profile-mail">
                                        +3 80(96) 101 02 03
                                    </div>
                                    <button className="btn trainee-button-edit">
                                        <i className="fa fa-pencil fa-2x" />
                                    </button>
                                </div>
                            </div>
                            <div className="space" />
                            <div className="trainee-profile-about">
                                <i className="fa fa-building fa-fw pull-left fa-2x" />
                                <div className="trainee-profile-names-div">
                                    <div className="trainee-profile-mail">
                                        Вінниця
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="space" />
                            <div className="icon-info">
                                <h5>Про себе</h5>
                                <p>Навчаюсь в середній школі №32 в 10ж класі. Захоплення: іноземні мови, кінний спорт, дота. Короткострокова ціль: знайти своє покликаня.</p>
                            </div>
                            <div className="space" />
                            <div className="trainee-profile-about">
                                <i className="fa fa-file fa-fw pull-left fa-2x" />
                                <div className="trainee-profile-names-div">
                                    <div className="trainee-profile-mail">
                                        <a>my_resume.pdf</a>
                                    </div>
                                    <button className="btn trainee-button-edit">
                                        <i className="fa fa-paperclip fa-2x" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <div className="space2" />
                            <div className="service-info trainee-profile-about-right">
                                <i className="fa fa-graduation-cap icon2" />
                                <div>
                                    <h6>Рівень освіти</h6>
                                    Середня базова, навчаюсь в 10 класі
                                </div>
                                <button className="btn trainee-button-edit">
                                    <i className="fa fa-pencil fa-2x" />
                                </button>
                            </div>
                            <hr />
                            <div className="service-info trainee-profile-cogs-right">
                                <button className="btn">
                                    Проходження практики
                                </button>
                                <div className="trainee-gaps" />
                                <button className="btn">
                                    Навчальні заклади
                                </button>
                                <div className="trainee-gaps" />
                                <a href="/test">
                                  <button className="btn">
                                      Пройти тест Голланда
                                  </button>
                                </a>
                                <div className="trainee-gaps" />
                                <button className="btn trainee-button-cogs">
                                    <i className="fa fa-cogs fa-2x" />
                                </button>
                            </div>
                            <hr />
                            <h4 className="trainee-res">Результати тесту:</h4>
                            <div className="service-info trainee-profile-diagram">
                                <Diagram />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default TraineeCabinet;
