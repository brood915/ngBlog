import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService, userService, $stateParams, $state,$scope, $timeout, $http) {
      this.blogService = blogService;
      this.userService = userService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$http = $http;
  }


  $onInit() {
    this.param = this.$stateParams.blogId;
    this.user = this.userService.user;
    if (this.blogService.blog.posts) {
      this.blogItems = this.blogService.blog.posts;
      this.getPost();
    }
    else {
      this.blogService.getBlogs()
      .then((data) => {
      this.blogItems = data;
      this.getPost();
      })
      .catch(()=> this.$state.go('500'));
    }
    
  }

  handleInitialLoading(data) { 
      // this.increaseView();
      this.current = this.getCurrentIndex();
      this.increaseView();
  }
    
  getCurrentIndex () {
    return this.blogItems.map(each => each._id).indexOf(this.item._id);
  }

  getPost() {
    this.blogService.getBlog(this.$stateParams.blogId)
    .then((data) => this.item = data)
    .then(()=> this.handleInitialLoading())
    .catch(() => this.$state.go('500'));
  }

  increaseView () {
    this.item.views++;
    this.blogService.increaseView(this.param, this.item);
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
    