import template from './nav.html';

class NavCtrl {
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
    