export class UserService {
    /* @ngInject */
  constructor($http, $window, jwtHelper) {
    this.$http = $http;
    this.$window = $window;
    this.jwtHelper = jwtHelper;
    this.user ={
      isLoggedIn: this.isLoggedIn(),
      payload: this.getUser()
    }
  }

  register (user) {
        return this.$http.post('/api/register', user);
  }

  saveToken (token) {
    this.$window.localStorage['token'] = token;
  }

  getToken () {
    return this.$window.localStorage['token'];
  }

  logIn (user) {
    return this.$http.post('/api/login', user);
    console.log('logged in');
  }

  logOut() {
    this.$window.localStorage.removeItem('token');
    console.log('logged out');
  }

  isLoggedIn() {
    const token  = this.getToken();
    if (token) {
      if (this.jwtHelper.isTokenExpired(token)) {
        console.log('token expired')
        this.logOut();
        return false;
      }
        return true;
    }
    else { 
      return false;
    }
  }

  getUser () {
    if (this.isLoggedIn()) {
      const token  = this.getToken();
      const payload = this.jwtHelper.decodeToken(token);
      return payload;
    }
  }
} 