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
    this.editing = false;
  }

  closeForm() {
    this.$scope.$apply(()=>{ //apply needed to use with the confirm directive
      this.blog.editing = false;
    });
  }

  handleEdit () { //passes the new value back to blog-detail comp
    this.editing = true;
    const dateEdited = this.blogService.getDate();
    this.modifiedBlog.dateEdited = dateEdited;
    this.blogService.update(`/api/posts/edit/${this.param}`, this.modifiedBlog)
      .then((resp) => {
        this.editBlog({
          $event: {
            post: resp.data
          }
        });
        this.blog.editing = false; //for hiding/showing the form
        this.editing = false; //for spinning icon
      })
      .catch(() => {
        this.editing = false;
        console.log('Editing failed!');
        this.error = "Editing Failed due to our server problems. Please try again later!";
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
    