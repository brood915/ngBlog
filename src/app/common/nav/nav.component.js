import template from './nav.html';

class NavCtrl {
  /* @ngInject */
  constructor(blogService, userService, $state, $timeout) {
    this.blogService = blogService;
    this.userService = userService;
    this.$state = $state;
    this.$timeout= $timeout;
  }
  $onInit() {
    this.typeahead = this.blogService.typeahead;
    this.isCollapsed = true;
    this.user = this.userService.user;
  }

  logOut () {
    this.userService.logOut();
    this.user = this.userService.user;
    this.$state.go('blog');
  }

  handleSubmit () {
    this.typeahead.searchValue = this.searchValue;
    this.$state.go('search');
  }
}





export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    