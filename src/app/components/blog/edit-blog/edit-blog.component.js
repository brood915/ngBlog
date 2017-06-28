import template from './edit-blog.html';
import angular from 'angular';

class EditBlogCtrl {
    /* @ngInject */
  constructor($scope, blogService) {
      this.$scope = $scope;
      this.blogService = blogService;
  }

  $onInit() {
    this.modifiedBlog = angular.copy(this.blogItem);
  }

  handleEdit () { //passes the new value back to blog-detail comp
    
    //get the time when the blog was editted
    let dateEdited = this.blogService.getDate();
    this.modifiedBlog.dateEdited = dateEdited;
    //find the item with the given id #
    this.blogItems.map((each,index) =>
    { 
      if (each.id === this.modifiedBlog.id){
        this.blogItems[index] = angular.copy(this.modifiedBlog);
      }
    });
    this.editBlog({
      $event: {
        blogItems: this.blogItems
      }
    });
  }

  resetForm () {
    this.$scope.$apply(()=>this.modifiedBlog = angular.copy(this.blogItem)); //reset the form if user closes the form
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
    