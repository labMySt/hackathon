import {
  AUTH_USER,
  AUTH_USER_FATCHED,
  AUTH_USER_ERROR
} from '../actions/types';


var initialState = {};

export default function authReduser(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER: return { ...state, authFatching: true };
    case AUTH_USER_FATCHED: return { ...state, authFatching: false, user: action.payload };
    case AUTH_USER_ERROR: return { ...state, authFatching: false, user: null, authErr: action.payload };
    default: return state;
  }
};
