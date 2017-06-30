import template from './add-blog.html';

class AddBlogCtrl {
    /* @ngInject */
  constructor(blogService, $scope, $timeout) {
      this.blogService = blogService;
      this.$scope = $scope;
      this.$timeout = $timeout;
  }


  $onInit () {
    this.resetForm();
    this.added = false;
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
  bindings: {blogItems: '<'}
}
    