import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams,$state,$scope, $timeout) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
  }


  $onInit() {
    this.blogItems = this.blogService.blogItems;

    if (this.blogItems){
      this.getBlog();
      this.item.views++; //increases view count when this page is activated
      this.lastItem = this.blogItems.length - 1; //gets the id # of item
  }
    else { //if blogitem not found
      this.$state.go('404'); //redirect to /404 to display error message
    }
  }

  likeBlog() {
    this.item.likes++;
  }

  dislikeBlog() {
    this.item.dislikes++;
  }
 
  deleteBlog() {
    this.blogService.deleteBlog(this.blogItems, this.item.id);
    this.$state.go('blog');
  }

  getBlog () {
     //find the blogitem with the same id as the one passed to param
    this.item = this.blogItems.find((each) => each.id === Number(this.$stateParams.blogId));
  }

  editBlog (event) { //passes the function down to edit-blog child comp
    this.blogItems = event.blogItems;
    this.getBlog();  
  }
}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {}
}
    