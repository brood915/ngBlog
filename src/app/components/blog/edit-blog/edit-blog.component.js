import template from './edit-blog.html';
import angular from 'angular';

class EditBlogCtrl {
    /* @ngInject */
  constructor(blogService,$scope) {
      this.blogService = blogService;
  }

  $onInit() {
    this.modifiedBlog = angular.copy(this.blogItem);
  }

  editBlog () {
      this.blogItem = this.modifiedBlog;
      console.log(this.blogItem);
  }
}


export const EditBlogComponent = {
  controller: EditBlogCtrl,
  template,
  bindings: {blogItem: '<'}
}
    