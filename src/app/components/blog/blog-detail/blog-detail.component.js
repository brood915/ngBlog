import template from './blog-detail.html';

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams,$state) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
  }


  $onInit() {
    this.blogItems = this.blogService.blogItems;
    //find the blogitem with the same id as the one passed to param
    this.item = this.blogItems.find((each) => each.id === Number(this.$stateParams.blogId));
    
    if (this.item === undefined) { //if blogitem not found
      this.$state.go('404'); //redirect to /404 to display error message
    }
  }
}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {}
}
    