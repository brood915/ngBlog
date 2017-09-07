import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http, $window, userService, $state) {
    this.$http = $http;
    this.userService = userService;
    this.$state = $state;
    this.$window = $window;
  }

  $onInit() {
    this.user = this.userService.user;
    this.isLoggedIn = this.user.isLoggedIn;
  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
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
    })
    .then(()=> {
      this.user.isLoggedIn = this.userService.isLoggedIn();
      this.user.payload = this.userService.getUser();
      this.$state.go('blog');
    })
    .catch(() => console.log('register failed!'));
  }
}
export const RegisterComponent = {
  template,
  controller: RegisterCtrl,
  bindings: {}
}
    