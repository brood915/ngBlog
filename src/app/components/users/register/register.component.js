import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http, $window, userService) {
  this.$http = $http;
  this.userService = userService;
  }

  $onInit() {
    console.log(this.userService.getToken())
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
      console.log(resp.data.token);
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
    