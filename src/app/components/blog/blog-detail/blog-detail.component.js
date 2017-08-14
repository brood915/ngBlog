import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams, $state,$scope, $timeout, $http) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$http = $http;
  }


  $onInit() {
    this.$http.get(`/post/${this.$stateParams.blogId}`)
    .then(resp=>this.item = resp.data);
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
    