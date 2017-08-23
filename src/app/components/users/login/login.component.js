import template from './login.html';
import angular from 'angular';

class LoginCtrl {
  /* @ngInject */
  constructor($http) {
  this.$http = $http;
  }


  $onInit() {
    
  }
}

export const LoginComponent = {
  template,
  controller: LoginCtrl,
  bindings: {}
}
    