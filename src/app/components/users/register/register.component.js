import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http, $window, userService, jwtHelper) {
  this.$http = $http;
  this.userService = userService;
  this.jwtHelper = jwtHelper;
  }

  $onInit() {
    const token = this.userService.getToken();
    console.log(token, this.jwtHelper.decodeToken(token));

  }

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }

    this.userService.register(user)
    .then((resp)=> {
      this.userService.saveToken(resp.data.token);
      this.registered = true;
    })
    .catch(() => this.registered = false);
  }
}
export const RegisterComponent = {
  template,
  controller: RegisterCtrl,
  bindings: {}
}
    