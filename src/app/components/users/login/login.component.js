import template from './login.html';
import angular from 'angular';

class LoginCtrl {
  /* @ngInject */
  constructor($http, userService, $state) {
    this.$http = $http;
    this.userService = userService;
    this.$state = $state;
  }


  $onInit() {
    this.user = this.userService.user;
  }

  logIn () {
   
    const user = {
      email: this.email,
      password: this.password
    }
    this.userService.logIn(user)
      .then((resp)=> {
        this.userService.saveToken(resp.data.token);
        this.user.isLoggedIn = this.userService.isLoggedIn();
        this.user.payload = this.userService.getUser();
        this.$state.go('blog');
      })
      .catch(() => this.loggedIn = false)

  }
}

export const LoginComponent = {
  template,
  controller: LoginCtrl,
  bindings: {}
}
    