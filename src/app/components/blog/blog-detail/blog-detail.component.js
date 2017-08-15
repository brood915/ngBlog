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
    if (this.blogService.blogItems) {
      this.blogItems = this.blogService.blogItems;
      this.item = this.blogItems.find(each=>each.id === this.$stateParams.blogId);
      this.current = this.getCurrentIndex();
    }
    else {
      this.blogService.getBlogs().then(data => {
      this.blogItems = data;
      this.item = data.find(each=>each.id === this.$stateParams.blogId);
      this.current = this.getCurrentIndex();
    });
    }


  }

        /*
        try using resolve
      1. need to get the list of posts
      2. need to get the indexof current post
      3. check whether it's the last post/first post
      4. go to next/prev post
      */

  getCurrentIndex () {
    return this.blogItems.map(each => each.id).indexOf(this.item.id);
  }

  likeBlog() {
    this.item.likes++;
  }

  dislikeBlog() {
    this.item.dislikes++;
  }

  deleteBlog (id) {
    this.$scope.$apply(()=>{ 
    this.blogService.deleteBlog(id).then(()=>{this.$state.go('blog')}); 
    });
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
    