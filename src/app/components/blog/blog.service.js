export class BlogService {
    /* @ngInject */
  constructor($http, $filter, userService, $window) {
    this.$http = $http;
    this.$filter = $filter;
    this.$window = $window;
    this.typeahead = {
      searchValue: null
    }
    this.blog = {
      posts: null,
      editing: false,
      titles: null
    };
    this.userService = userService;
  }

goBack () {
    this.$window.history.back(); 
    //go back to where user was right before
}

getDate() {
    let date = new Date();
    const formatDate = this.$filter('date');
    date = formatDate(date, 'M/d/yy h:mm:ss a');
    return date;
  }

isShort (desc) {
    if (desc.length < 100) {
      return true;
    }

    this.shortened = desc.substr(0, 99) + "...";
    return false;
  }

 isNew(blogDate) {
    let date = new Date();
    let isNew = date - new Date(blogDate);
    let hours = isNew/3600000; //converts ms to hr
  
    
    if(hours < 72 ) {
      return true;
    }

    return false;
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
  
  update (url ,data) {
    return this.$http.put(url, data, this.auth());
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

  deleteBlog(id){
    return this.$http.delete(`/api/posts/delete/${id}`, this.auth());
  }
  
  deleteComment(url) {
    return this.$http.delete(url, this.auth());
  }
} 