import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService) {
      this.blogService = blogService;
  }

  $onInit() {
    this.blogItems = this.blogService.blogItems;
    this.blogService.getData.then((data) => (console.log(data)))
  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    