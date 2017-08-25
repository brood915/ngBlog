export class UserService {
    /* @ngInject */
  constructor($http, $window, jwtHelper) {
    this.$http = $http;
    this.$window = $window;
    this.jwtHelper = jwtHelper;
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

  logIn () {

  }

  logOut() {
    this.$window.localStorage.removeItem('token');
    console.log(this.getToken())
  }

  isLoggedIn() {
    const token  = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
      //we want to check if token is NOT expired. So, added !
    }
    else { 
      return false;
    }
  }

  getUser () {
    if (this.isLoggedIn()) {
      const token  = this.getToken();
      const payload = this.jwtHelper.decodeToken(token);
      console.log(payload);
      return payload;
    }
  }
} 