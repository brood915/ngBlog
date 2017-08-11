import template from './nav.html';

class NavCtrl {
  /* @ngInject */
  constructor() {
  }
  $onInit() {
    this.isCollapsed = true;
  }
}


export const NavComponent = {
  controller: NavCtrl,
  template,
  bindings: {}
}
    