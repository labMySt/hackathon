import React, { Component } from "react";
import questions from './Questions.js'
import interpretation from "./interpretation.js"

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {testStage: 0,
                  data_result:[]};
    this.buttonClick = this.buttonClick.bind(this);
  }

 buttonClick(but){
   if (this.state.testStage < 42) {
     if (but === 0) {
       var mass = this.state.data_result;
       mass.push(1);
       this.setState(prevState =>({
           data_result: mass,
         testStage: prevState.testStage+1
       }));
     } else if (but === 1) {
       var mass = this.state.data_result;
       mass.push(2);
       this.setState(prevState =>({
         data_result: mass,
         testStage: prevState.testStage+1
       }));
     }
   }
   else {
     interpretation(this.state.data_result);
   }

   this.setState(prevState =>({

   }));
 }

  render() {
    var testPart = <div className="col-md-8 col-sm-8">
      <div className="service-info">
        <div className="icon">
          <i className="fa fa-question-circle mx-2" />
          <span className="">{this.state.testStage} з 42</span>
        </div>
        <h4>Виберіть</h4>
        <button className="btn btn-appoint btn-lg btn-block" onClick = {()=>this.buttonClick(0)}>
          <h2 className="section-title white lg-line">{questions[this.state.testStage][0]}</h2>
        </button>
      </div>
      <h4>або</h4>
      <button className="btn btn-appoint btn-lg btn-block" onClick = {()=>this.buttonClick(1)}>
        <h2 className="section-title white lg-line">{questions[this.state.testStage][1]}</h2>
      </button>
    </div>
    return (
      <div>
        <div style = {{height: "90px"}}></div>
      <section id="service" className="section-padding" style = {{height: "65vh"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <h2 className="ser-title">Про тест</h2>
              <hr className="botm-line" />
              <p>
                Методика Д. Голанда визначає ступінь зв`язку типу особистості з
                асферою професійної діяльності, до якої у неї природні нахили.
                Люди переважно прагнуть знайти середовище і професію, які
                дозволили б їм краще розкрити свої здібності, виразити свої
                інтереси, цінності орієнтації.
              </p>
            </div>
            {testPart}
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Testing;
