import template from './add-blog.html';

class AddBlogCtrl {
    /* @ngInject */
  constructor(blogService, $scope) {
      this.blogService = blogService;
      this.$scope = $scope;
  }


  $onInit () {
    this.resetForm();
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
  }

}




export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {blogItems: '<'}
}
    