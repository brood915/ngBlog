export class BlogService {
    /* @ngInject */
  constructor($http, $filter) {
    this.$http = $http;
    this.$filter = $filter;
    this.blogItems = null;
  }

  getData () {
    return this.$http.get('blog.json')
    .then((resp)=> resp.data)
  }

  getDate() {
    let date = new Date();
    let formatDate = this.$filter('date');
    date = formatDate(date, 'M/d/yy h:mm:ss a');
    return date;
  }


  deleteBlog(items, target){
   items.map((each,index) =>
    { 
      if (each.id === target){
        items.splice(index, 1);
      }
    });
    items.map((each,index)=> each.id = index); //resets the id #
  } 
} 