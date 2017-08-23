import template from './register.html';
import angular from 'angular';

class RegisterCtrl {
  /* @ngInject */
  constructor($http) {
  this.$http = $http;
  }

  $onInit() {
  }

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    this.$http.post('/api/register', user)
    .then(()=> console.log('success!'))
    .catch(()=>console.log('error!!!!'))
  }

}
export const RegisterComponent = {
  template,
  controller: RegisterCtrl,
  bindings: {}
}
    