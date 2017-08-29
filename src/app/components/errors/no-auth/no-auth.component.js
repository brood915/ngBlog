import template from './no-auth.html';

class NoAuthCtrl {
    /* @ngInject */
  constructor($window, $state, userService) {
      this.$window = $window;
      this.$state = $state;
      this.userService = userService;
  }


  $onInit () {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
  }

  goLogin() {
    this.$state.go('login');
  }
}


export const NoAuthComponent = {
  controller: NoAuthCtrl,
  template,
  bindings: {}
}
    