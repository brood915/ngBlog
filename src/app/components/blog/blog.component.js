import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService) {
    this.blogService = blogService;
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
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    