import Auth0Lock from "auth0-lock";
import history from "./history";
import { Auth0Config } from "../../settings";
import { notification } from "../../components";
import jwt_decode from "jwt-decode";
import axios from "axios";

class Auth0Helper {
  isValid = Auth0Config.clientID && Auth0Config.domain;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login(handleLogin) {
    this.lock = this.isValid
      ? new Auth0Lock(
          Auth0Config.clientID,
          Auth0Config.domain,
          Auth0Config.options
        )
      : null;
    if (!this.lock) {
      return;
    }
    this.lock.on("authenticated", authResult => {
      if (authResult && authResult.accessToken) {
        if (window) {
          localStorage.setItem("admin_token", authResult.accessToken);
        }
        handleLogin();
      } else {
        notification("error", "Wrong mail or password");
      }
    });
    this.lock.show();
  }
  handleAuthentication(props) {
    localStorage.setItem("admin_token", "secret token");
    history.replace("/dashboard");
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("admin_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/");
  }

  logout() {
    //Delete token from header
    this.setAuthTokenInHeader(false);
    // Clear access token and ID token from local storage
    localStorage.removeItem("admin_token");
    //Set current user to {} which will set isAuthenticated to false
    // navigate to the home route
    // history.replace("/"); //3awz a4elha
    window.location.href = "/";
  }

  //adel
  setAuthTokenInHeader = token => {
    if (token) {
      //apply to every request
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      //Delete Auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  //Check for token
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const admin_token = localStorage.getItem("admin_token");
    //set Authorization token in the header
    this.setAuthTokenInHeader(admin_token);
    //User data
    const decoded = jwt_decode(admin_token);
    const expireTime = decoded.exp;
    const currentTime = Date.now() / 1000;

    return expireTime < currentTime;
  }
}
export default new Auth0Helper();
