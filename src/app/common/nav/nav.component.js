import template from './nav.html';

class NavCtrl {
  /* @ngInject */
  constructor(blogService, userService, $state) {
    this.blogService = blogService;
    this.userService = userService;
  }
  $onInit() {
    this.typeahead = this.blogService.typeahead;
    this.isCollapsed = true;
    this.user = this.userService.getUser();
  }

  logOut () {
    this.userService.logOut();
  }
}



export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    