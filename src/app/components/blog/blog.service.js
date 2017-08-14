export class BlogService {
    /* @ngInject */
  constructor($http, $filter) {
    this.$http = $http;
    this.$filter = $filter;
    this.typeahead = {
      searchValue: null
    }
  }

  addData (url, data) {
    return this.$http.post(url, data);
  }

  getData () {
    return this.$http.get('/posts')
    .then((resp)=> resp.data);
  }

  getDate() {
    let date = new Date();
    let formatDate = this.$filter('date');
    date = formatDate(date, 'M/d/yy h:mm:ss a');
    return date;
  }

  deleteBlog(items, target){
  //  items.map((each,index) =>
  //   { 
  //     if (each.id === target){
  //       items.splice(index, 1);
  //     }
  //   });
  } 
} 