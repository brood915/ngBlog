import template from './login.html';
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
export const LoginComponent = {
  template,
  controller: ctrl,
  bindings: {}
}
    