export class BlogService {
    /* @ngInject */
  constructor($http, $filter) {
    this.$http = $http;
    this.$filter = $filter;
    this.typeahead = {
      searchValue: null
    }
    this.blogItems = null;
  }

  addData (url, data) {
    return this.$http.post(url, data);
  }

  getBlog (id) {
    return this.$http.get(`/post/${id}`)
    .then(resp=>resp.data);
  }

  getBlogs () {
    return this.$http.get('/posts')
    .then((resp)=> resp.data);
  }

  getDate() {
    let date = new Date();
    let formatDate = this.$filter('date');
    date = formatDate(date, 'M/d/yy h:mm:ss a');
    return date;
  }

  deleteBlog(id){
    return this.$http.delete(`/posts/delete/${id}`)
  } 
} 