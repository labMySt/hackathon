import React from 'react';
import axios from 'axios'
class SingUp extends React.Component{

    render(){
    return(
      <div>
        <div style = {{height: "90px", backgroundColor: "#325C6A"}}></div>
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in"></span> Зареєструватись</h1>
        <form action="/auth/signup" method="post">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email"/>
              </div>
              <div className="form-group">
                <label>Пароль</label>
                <input type="password" className="form-control" name="password"/>
              </div>
              <div className="form-group">
                <label>Підтвердження пароля</label>
              <input type="password" className="form-control" name="confirmPassword"/>
              </div>
              <button type="submit" className="btn btn-lg btn-info mr-2">Зареєструватись</button>
        </form>
        <hr/>
        <p>Вже маєш екаунт? <a href="/lognin">Увійти</a></p>
        <p>Або <a href="/">на головну</a></p>
      </div>
    </div>
  </div>
    )
  }
}

export default SingUp;
