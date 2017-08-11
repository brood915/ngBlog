import template from './nav.html';

class NavCtrl {
  /* @ngInject */
  constructor(blogService) {
    this.blogService = blogService;
  }
  $onInit() {
    this.typeahead = this.blogService.typeahead;
    this.isCollapsed = true;
  }
}


export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    