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
      this.getPost();
    }
    else {
      this.blogService.getBlogs().then((data) => {
      this.blogItems = data;
      this.getPost();
      });
    }
  }

  handleInitialLoading(data) { 
      // this.increaseView();
      this.current = this.getCurrentIndex();
  }
    
  getCurrentIndex () {
    return this.blogItems.map(each => each._id).indexOf(this.item._id);
  }

  getPost() {
    this.blogService.getBlog(this.$stateParams.blogId)
    .then((data) => this.item = data)
    .then(()=> this.handleInitialLoading())
    .catch(() =>console.log('failed to get the blog post'));
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
    this.blogService.deleteBlog(id).then((resp)=>
      {
        this.blogItems = resp.data;
        this.$state.go('blog');
        this.current = this.getCurrentIndex();
      }); 
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
    