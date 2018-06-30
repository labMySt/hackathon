import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class SignUp extends React.Component {
  handleSubmit(user) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form
        model="forms"
        onSubmit={(user) => this.handleSubmit(user)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="display-4 mr-4">Sign Up</h2>
              <div className="form-group">
                <label htmlFor="forms.nick">Nick or Company:</label>
                <Control.text className="form-control" model="forms.nick" id="forms.nick" />
              </div>
              <div className="form-group">
                <label htmlFor="forms.email">Email:</label>
                <Control.text className="form-control" model="forms.email" id="forms.email" />
              </div>
                <div className="form-group">
                  <label htmlFor="forms.password">Password:</label>
                  <Control.text className="form-control" model="forms.password" id="forms.password" /></div>
                <div className="form-group">
                  <label htmlFor="forms.password">Confirm Password:</label>
                  <Control.text className="form-control" model="forms.password" id="forms.password" />
                </div>
                <button type="submit" className="btn btn-lg btn-info mr-4">Submit</button>
           </div>
         </div>
       </div>

      </Form>
    );
  }
}

export default SignUp;
