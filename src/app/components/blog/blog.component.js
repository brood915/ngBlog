import template from './blog.html';


class BlogCtrl {
  constructor() {

  }

  $onInit() {
    this.blogItems = [
      {title: 'some title', id: 1, description: 'this is a book'},
      {title: 'some title', id: 2, description: 'this is a book'},
      {title: 'some title', id: 3, description: 'this is a book'},    
      {title: 'some title', id: 4, description: 'this is a book'}  
    ]

  }
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    