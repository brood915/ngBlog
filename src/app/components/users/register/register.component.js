import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http, $window, userService, jwtHelper, $state) {
    this.$http = $http;
    this.userService = userService;
    this.$state = $state;

  }

  $onInit() {
    this.user = this.userService.user;
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
      this.user.isLoggedIn = this.userService.isLoggedIn();
      this.user.payload = this.userService.getUser();
      this.$state.go('blog');
    })
    .catch(() => this.registered = false);
  }
}
export const RegisterComponent = {
  template,
  controller: RegisterCtrl,
  bindings: {}
}
    