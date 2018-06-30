import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    return (
      <div>
        <section id="banner" className="banner">
        <div className="bg-color">
          <div className="container">
            <div className="row">
              <div className="banner-info">
                <div className="banner-logo text-center">
                </div>
                <div className="banner-text text-center">
                  <h1 className="white">Досвід - краще ніж відгук</h1>
                  <p>Пройди практику до навчання.
                     <br />
                     Вибери практику у провідних компаніях твого міста, спробуй нову професію і тільки потім навчайся.
                   </p>
                  <a href="#contact" className="btn btn-appoint">Знайти подію.</a>
                </div>
                <div className="overlay-detail text-center">
                  <a href="#service"><i className="fa fa-angle-down" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Welcome;
