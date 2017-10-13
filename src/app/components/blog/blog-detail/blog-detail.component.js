import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService, userService, $stateParams, $state,$scope, $timeout) {
      this.blogService = blogService;
      this.userService = userService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
  }


  $onInit() {
    this.param = this.$stateParams.blogId;
    this.blog = this.blogService.blog;
    this.user = this.userService.user;
    if (this.blog.posts) {
      const filtered = this.blog.posts.filter((each) => {
        return each._id === this.$stateParams.blogId;
      });
      this.post = filtered[0];
      this.handleInitialLoading();
    }
    else {
      this.blogService.getBlogs()
      .then((data) => {
      this.blog.posts = data;
      this.getPost();
      })
      .catch(()=> this.$state.go('500'));
    }
    
  }

  handleInitialLoading() { 
      // this.increaseView();
      this.current = this.getCurrentIndex();
      this.increaseView();
  }
    
  getCurrentIndex () {
    return this.blog.posts.map(each => each._id).indexOf(this.post._id);
  }

  getPost() {
    this.blogService.getBlog(this.$stateParams.blogId)
    .then((data) => {
        this.post = data;
        if (data && data.msg) { //if post not found and error returned by database
          this.$state.go('404');
        }
    })
    .then(()=> this.handleInitialLoading())
    .catch(() => {
      this.$state.go('500');
      
    });
  }

  increaseView () {
    this.post.views++;
    this.blogService.increaseView(this.param, this.post);
    //need to fix this after adding user authentication
  }

  likeBlog() {
    this.post.likes++;
    this.blogService.update(`/api/posts/edit/${this.param}`, this.post);
  }

  dislikeBlog() {
    this.post.dislikes++;
    this.blogService.update(`/api/posts/edit/${this.param}`, this.post);
  }

  deleteBlog (id) {
    this.$scope.$apply(()=>{ 
    this.blogService.deleteBlog(id).then((resp)=>
      {
        this.blog.posts = resp.data;
        this.$state.go('blog');
        this.current = this.getCurrentIndex();
      }); 
    });
  }


  editBlog (event) { //passes the function down to edit-blog child comp
    this.post = event.post;
    const filtered = this.blog.posts.map((each)=> {
      if (this.post._id === each._id) {
        return each = this.post;
      }
      else {
        return each;
      }
    });
    this.blog.posts = filtered; //replace the post with edited post in the list of posts
  }
}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {}
}
    