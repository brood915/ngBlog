import template from './edit-blog.html';
import angular from 'angular';

class EditBlogCtrl {
    /* @ngInject */
  constructor($scope, blogService, $http) {
      this.$scope = $scope;
      this.blogService = blogService;
      this.$http = $http;
  }

  $onInit() {
    this.blog = this.blogService.blog;
    this.modifiedBlog = angular.copy(this.post);
  }

  handleEdit () { //passes the new value back to blog-detail comp
    const dateEdited = this.blogService.getDate();
    this.modifiedBlog.dateEdited = dateEdited;
    this.blogService.update(`/api/posts/edit/${this.param}`, this.modifiedBlog)
      .then((resp) => {
        this.editBlog({
          $event: {
            post: resp.data
          }
        });
      })
      .catch(() => {
        console.log('Editing failed!')
      })
  }

  resetForm () {
    this.$scope.$apply(()=>this.modifiedBlog = angular.copy(this.post)); //reset the form if user closes the form
  }
}


export const EditBlogComponent = {
  controller: EditBlogCtrl,
  template,
  bindings: {
    post: '<',
    posts: '<',
    editBlog:'&',
    param: '<'
  }
}
    