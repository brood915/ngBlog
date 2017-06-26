import template from './edit-blog.html';

class EditBlogCtrl {
    /* @ngInject */
  constructor(blogService,$scope) {
      this.blogService = blogService;
      this.$scope = $scope;
  }

  $onInit() {

  }

}


export const EditBlogComponent = {
  controller: EditBlogCtrl,
  template,
  bindings: {}
}
    