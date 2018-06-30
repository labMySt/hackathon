import React from 'react';

class LognIn extends React.Component{
      render(){
      return(
        <div>
          <div style = {{height: "90px", backgroundColor: "#325C6A"}}></div>
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3">
            <h1><span className="fa fa-sign-in"></span> Увійти</h1>
            <form action="/auth/login" method="post">
              <div className="form-group">
                <label>Електронна пошта</label>
                <input type="text" className="form-control" name="email"/>
              </div>
              <div className="form-group">
                <label>Пароль</label>
                <input type="password" className="form-control" name="password"/>
              </div>
             <button type="submit" className="btn btn-lg btn-info mr-2">Увійти</button>
           </form>
           <hr/>
           <p>Ще не зареєстрований? <a href="/signin">Зареєструватись</a></p>
         <p>Або <a href="/">на головну</a></p>
         </div>
      </div>
    </div>
      )
    }
  }

export default LognIn;
