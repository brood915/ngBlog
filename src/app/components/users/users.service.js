export class UserService {
    /* @ngInject */
  constructor($http, $window) {
    this.$http = $http;
    this.$window = $window;
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

  login () {

  }

  isLogged() {
    const token  = this.getToken();

 
      console.log(token)
  
  }
} 