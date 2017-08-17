import template from './nav.html';

class NavCtrl {
  /* @ngInject */
  constructor(blogService, $state) {
    this.blogService = blogService;
  }
  $onInit() {
    this.typeahead = this.blogService.typeahead;
    this.isCollapsed = true;
  }

  test(){
    alert('ha');
  }
}


export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    