import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService) {
    this.blogService = blogService;
  }

  $onInit() {
    this.blogItems = this.blogs;
    this.blogService.blogItems = this.blogItems;
  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {blogs: '<'}
}
    