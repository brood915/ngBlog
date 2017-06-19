export class BlogService {
    /* @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  getData () {
    return this.$http.get('blog.json')
    .then((resp)=> resp.data)
  }
}