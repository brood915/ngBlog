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
      "description": "",
      "comments": []
    }
 }

  addBlog () {

    this.blog.id = this.blogItems.length;
    this.blogItems.push(this.blog);
    this.resetForm();
  }

}




export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {blogItems: '<'}
}
    