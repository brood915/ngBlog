import template from './search.html';

class SearchCtrl {
    /* @ngInject */
  constructor(blogService, $scope, $timeout, $window, $state, userService, $filter) {
      this.blogService = blogService;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$window = $window;
      this.$state = $state;
      this.$filter = $filter;
      this.userService = userService;
  }


  $onInit () {
    this.blog = this.blogService.blog;
    this.user = this.userService.user;
    this.typeahead = this.blogService.typeahead;
    if (!this.blog.posts) {
      this.blogService.getBlogs()
      .then((data) => {
      this.blog.posts = data;
      this.filterPosts();
      })
      .catch(()=> this.$state.go('500'));
    }
    else {
      this.filterPosts();
    }
  }

  filterPosts () {
    this.result = this.$filter('filter')(this.blog.posts, this.typeahead.searchValue);
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
    