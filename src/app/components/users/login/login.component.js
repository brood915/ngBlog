import template from './login.html';
import angular from 'angular';

class LoginCtrl {
  /* @ngInject */
  constructor($http, userService) {
    this.$http = $http;
    this.userService = userService;
  }


  $onInit() {
  }

  login () {
    this.userService.login()

  }
}

export const LoginComponent = {
  template,
  controller: LoginCtrl,
  bindings: {}
}
    