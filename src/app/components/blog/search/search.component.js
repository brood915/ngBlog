import template from './search.html';

class SearchCtrl {
    /* @ngInject */
  constructor(blogService, $scope, $timeout, $window, $state, userService) {
      this.blogService = blogService;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$window = $window;
      this.$state = $state;
      this.userService = userService;
  }


  $onInit () {

  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
  }

}




export const SearchComponent = {
  controller: SearchCtrl,
  template,
  bindings: {}
}
    