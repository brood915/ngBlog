import template from './login.html';
import angular from 'angular';

class LoginCtrl {
  /* @ngInject */
  constructor($http, userService, blogService, $state, $window) {
    this.$http = $http;
    this.userService = userService;
    this.blogService = blogService;
    this.$state = $state;
    this.$window = $window;
  }


  $onInit() {
    this.user = this.userService.user;
    this.isLoggedIn = this.user.isLoggedIn;
    this.resetStatus();
  }

  resetStatus () {
    this.error = false;
    this.logging = false;
  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
  }

  logIn () {
    this.resetStatus();
    this.logging = true;
    const user = {
      email: this.email,
      password: this.password
    }
    this.userService.logIn(user)
      .then((resp)=> {
        if (resp.data.token){ 
          this.userService.saveToken(resp.data.token);
          this.user.isLoggedIn = this.userService.isLoggedIn();
          this.user.payload = this.userService.getUser();
          this.goBack();
        }
        else {
          this.error = resp.data.message;
          this.logging = false;
        }
      })
      .catch(() => {
        this.logging = false;
        this.error = "Something went wrong on our side. Please try again later!"
      })
  }
}

export const LoginComponent = {
  template,
  controller: LoginCtrl,
  bindings: {}
}
    