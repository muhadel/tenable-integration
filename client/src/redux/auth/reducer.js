import actions from './actions';
import { isEmpty } from '../../helpers/utility';
import Auth0Helper from '../../helpers/auth0/index';
import jwt_decode from 'jwt-decode';

const initState = { isAuthenticated: false, user: {}, errors: {} }; //idToken: null,

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        errors: {},
        // idToken: action.token
      };
    case actions.CHECK_AUTHORIZATION:
      const admin_token = localStorage.getItem('admin_token');
      if (admin_token) {
        const isTokenExpired = Auth0Helper.isAuthenticated();
        if (isTokenExpired) {
          //Delete local Storage
          Auth0Helper.logout();
          return initState; //3awz agrab ab3t actions.LOGOUT
        } else {
          const decoded = jwt_decode(admin_token);
          return {
            ...state,
            isAuthenticated: true,
            user: decoded,
          };
        }
      } else {
        return initState;
      }

    case actions.LOGOUT:
      // Auth0Helper.logout();
      //Set current user to {} which will set isAuthenticated to false
      return initState;
    case actions.LOGIN_ERROR:
      console.log('LOGIN_ERROR', action);

      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
