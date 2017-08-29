import template from './add-blog.html';
import uuid from 'uuid/v4';

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
      this.$state.go('401');
    }
    console.log(this.userService.isLoggedIn())
    this.blogItems = this.blogService.blogItems;
    this.added = false;
    this.resetForm();
  }

  goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
  }

  resetForm () {
    this.blog = {
      "title": "",
      "id": "",
      "views": 0,
      "likes": 0,
      "dislikes": 0,
      "name": "",
      "date":"",
      "description": "",
      "comments": []
    }
 }

  addBlog () {
    this.blog.id = uuid();
    this.blog.date = this.blogService.getDate();
    this.blogService.addData('/posts/add', this.blog).then((resp)=>this.blogService.blogItems = resp.data);
    this.resetForm();

    this.$timeout(() =>{
      this.$scope.addBlogForm.$setPristine();
      this.added = true;
    });//resets form
  }

}




export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {}
}
    