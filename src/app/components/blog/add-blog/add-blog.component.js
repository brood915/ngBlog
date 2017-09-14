import template from './add-blog.html';

class AddBlogCtrl {
    /* @ngInject */
  constructor(blogService, $scope, $timeout, $window, $state, userService) {
      this.blogService = blogService;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$window = $window;
      this.$state = $state;
      this.userService = userService;
  }


  $onInit () {
    if (!this.userService.isLoggedIn()) {
      this.$state.go('login');
    }
    this.user = this.userService.user;
    this.blogItems = this.blogService.blog.posts;
    this.added = false;
    this.adding = false;
    this.error = false;
    this.resetForm();
  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
  }

  resetForm () {
    this.blog = {
      "title": "",
      "views": 0,
      "likes": 0,
      "dislikes": 0,
      "name": this.user.payload.name,
      "date": this.blogService.getDate(),
      "description": "",
      "comments": []
    }
 }

  addBlog () {
    this.adding = true;
    this.blogService.addData('/api/posts/create', this.blog)
    .then((resp)=>{
        this.blogService.blog.posts = resp.data;
    })
    .then(()=> {
        this.added = true;
        this.adding = false;
        this.resetForm();
        this.$timeout(() =>{
          this.$scope.addBlogForm.$setPristine();
        });//resets form
    })
    .catch(() => {
      console.log('not posted!');
      this.adding = false;
      this.error = true;
    });
  }

}




export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {}
}
    