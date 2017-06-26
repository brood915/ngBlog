import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService, $scope) {
    this.blogService = blogService;
    this.$scope = $scope;
  }

  $onInit() {
    if (!this.blogService.blogItems){ //initialize data if not present yet
      this.blogService.getData()
      .then((resp) => {this.blogService.blogItems = resp; this.blogItems = resp;})
    }
    else {
      this.blogItems = this.blogService.blogItems;
    }
  }

  deleteBlog (index) {
   this.$scope.$apply(this.blogItems.splice(index,1)); //to allow confirm directive to update view after running this
   this.blogItems.map((each,index)=> each.id = index); //change the id #s to prevent duplicates
  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    