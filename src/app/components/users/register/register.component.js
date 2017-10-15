import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http, userService, $state, blogService) {
    this.$http = $http;
    this.userService = userService;
    this.blogService = blogService;
    this.$state = $state;
  }

  $onInit() {
    this.user = this.userService.user;
    this.isLoggedIn = this.user.isLoggedIn;
    this.resetStatus();
  }

  resetStatus() {
    this.error = false;
    this.registering = false;
    this.registered = false;
  }

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }

    this.registering = true;

    this.userService.register(user)
    .then((resp)=> {
      console.log(resp)
      if (resp.data.token) {
        this.userService.saveToken(resp.data.token);
        this.registered = true;
        this.registering = false;
        this.user.isLoggedIn = this.userService.isLoggedIn();
        this.user.payload = this.userService.getUser();
        this.$state.go('blog');
      }
      else {
        this.error = resp.data.msg || resp.data.message;
        this.registering = false;
      }
    })
    .catch(() => {
      this.error = "Something happened on our side. Please try later on!";
      this.registering = false;
    });
  }
}
export const RegisterComponent = {
  template,
  controller: RegisterCtrl,
  bindings: {}
}
    