import template from './add-blog.html';

class AddBlogCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams,$state,$scope) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
  }


  


}


export const AddBlogComponent = {
  controller: AddBlogCtrl,
  template,
  bindings: {index:'<'}
}
    