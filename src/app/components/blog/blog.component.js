import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService) {
      this.blogService = blogService;
  }

  $onInit() {
    this.blogItems = this.blogService.blogItems;
  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    