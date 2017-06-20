import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService) {
    this.blogService = blogService;
  }

  $onInit() {
    this.blogService.getData()
    .then((resp) => {this.blogService.blogItems = resp; this.blogItems = resp;})
  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    