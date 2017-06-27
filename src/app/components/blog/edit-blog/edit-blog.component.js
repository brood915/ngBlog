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

  handleEdit () { //passes the new value back to blog-detail comp
    this.blogItems[this.modifiedBlog.id] = angular.copy(this.modifiedBlog);
    this.editBlog({
      $event: {
        blogItems: this.blogItems
      }
    })
  }

  cancelEdit () {
    this.modifiedBlog = angular.copy(this.blogItem); //reset the form if user closes the form
  }
}


export const EditBlogComponent = {
  controller: EditBlogCtrl,
  template,
  bindings: {
    blogItem: '<',
    blogItems: '<',
    editBlog:'&'
  }
}
    