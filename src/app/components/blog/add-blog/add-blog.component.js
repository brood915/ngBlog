import template from './add-blog.html';

class AddBlogCtrl {
    /* @ngInject */
  constructor(blogService, $scope, $timeout, $window) {
      this.blogService = blogService;
      this.$scope = $scope;
      this.$timeout = $timeout;
      this.$window = $window;
  }


  $onInit () {
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
    this.blog.id = this.blogItems.length;
    this.blog.date = this.blogService.getDate();
    this.blogItems.unshift(this.blog);
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
    