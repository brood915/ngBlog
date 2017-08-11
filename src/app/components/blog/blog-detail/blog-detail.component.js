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
    if (!this.blogService.blogItems)
    this.blogService.getData()
    .then(data => {
      this.blogItems = data;
      this.getBlog(data);
    });
    else {
      this.blogItems = this.blogService.blogItems;
      this.getBlog(this.blogItems);
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

  getBlog (items) {
     //find the blogitem with the same id as the one passed to param
    this.item = items.find((each) => each.id === Number(this.$stateParams.blogId));
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
    