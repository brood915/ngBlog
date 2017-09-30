export class BlogService {
    /* @ngInject */
  constructor($http, $filter, userService) {
    this.$http = $http;
    this.$filter = $filter;
    this.typeahead = {
      searchValue: null
    }
    this.blog = {
      posts: null
    };
    this.userService = userService;
  }

  auth() {
    return {
      headers: {
        Authorization: 'Bearer ' + this.userService.getToken()
      }
    }
  }

  addData (url, data) {
    return this.$http.post(url, data, this.auth());
  }
  
  update (id ,data) {
    return this.$http.put(`/api/posts/edit/${id}`, data, this.auth());
  }

  increaseView (id ,data) {
    return this.$http.put(`/api/posts/increaseView/${id}`, data);
  }

  getBlog (id) {
    return this.$http.get(`/api/posts/${id}`)
    .then(resp=>resp.data);
  }

  getBlogs () {
    return this.$http.get('/api/posts')
    .then((resp)=> resp.data);
  }

  getDate() {
    let date = new Date();
    const formatDate = this.$filter('date');
    date = formatDate(date, 'M/d/yy h:mm:ss a');
    return date;
  }

  deleteBlog(id){
    return this.$http.delete(`/api/posts/delete/${id}`, this.auth())
  } 
} 