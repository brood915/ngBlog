import template from './home.html';
import angular from 'angular';

class ctrl {
  constructor($http) {
  this.$http = $http;
  }


$onInit() {
  this.$http({
    method: 'GET',
    url: '/api/test'
  }).then((res) => console.log(res.data.test))
  
}
}
export const HomeComponent = {
  template,
  controller: ctrl,
  bindings: {}
}
    