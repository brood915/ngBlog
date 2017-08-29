import template from './profile.html';
import angular from 'angular';

class ProfileCtrl {
  /* @ngInject */
  constructor(userService) {
    this.userService = userService;
  }
  
  $onInit() {
    this.user = this.userService.user.payload;
    console.log(this.user)
  }
}
export const ProfileComponent = {
  template,
  controller: ProfileCtrl,
  bindings: {}
}
    