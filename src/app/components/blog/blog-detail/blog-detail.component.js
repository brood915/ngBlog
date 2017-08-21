import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService, $stateParams, $state,$scope, $timeout, $http) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$http = $http;
  }


  $onInit() {
    this.param = this.$stateParams.blogId;
    if (this.blogService.blogItems) {
      this.blogItems = this.blogService.blogItems;
      this.handleInitialLoading(this.blogItems);
    }
    else {
      this.blogService.getBlogs().then(data => {
      this.blogItems = data;
      this.handleInitialLoading(data);
    });
    }
  }

  handleInitialLoading(data) {
      this.item = data.find(each=>each.id === this.param);
                
      if (!this.item) {
        this.$state.go('404');
      }
      else {
      this.increaseView();
      this.current = this.getCurrentIndex();
      }
  }
    
  getCurrentIndex () {
    return this.blogItems.map(each => each.id).indexOf(this.item.id);
  }

  increaseView () {
    this.item.views++;
    this.blogService.update(this.param, this.item);
    //need to fix this after adding user authentication
  }

  likeBlog() {
    this.item.likes++;
    this.blogService.update(this.param, this.item);
  }

  dislikeBlog() {
    this.item.dislikes++;
    this.blogService.update(this.param, this.item);
  }

  deleteBlog (id) {
    this.$scope.$apply(()=>{ 
    this.blogService.deleteBlog(id).then(()=>{this.$state.go('blog')}); 
    });
  }


  editBlog (event) { //passes the function down to edit-blog child comp
    this.item = event.blogItem;  
  }
}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {}
}
    