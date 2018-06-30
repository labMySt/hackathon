import { combineReducers } from 'redux'
import authReduser from './authReduser';
import { combineForms } from 'react-redux-form';

const initialUser = {
  nick: '',
  email: '',
  password: '',
};


const rootReducer = combineReducers({
    auth: authReduser,
    forms: combineForms({
      user: initialUser
     }, 'forms'),

});

export default rootReducer;
