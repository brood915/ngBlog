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
    console.log(this.blogItems)
  }

}




export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {blogItems: '<'}
}
    