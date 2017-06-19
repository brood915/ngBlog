import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import uiRouter from '@uirouter/angularjs';


export const AppModule = angular.module('app', [CommonModule, ComponentsModule, uiRouter])
  .component('app', AppComponent)
  .config(/* @ngInject */($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/404')
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home'
      })
      .state('blog', {
        url: '/blog',
        template:'<blog blogs=$resolve.blogs></blog>',
        resolve: {
          blogs: function(blogService) {  return blogService.getData();}
        }
      })
      .state('blogItem', {
        name: 'blogItem',
        url: '/blog/{blogId}',
        component: 'blogDetail'
  })
    .state('404', {
        name: '404',
        url: '/404',
        component: 'error'
    })
  })
  .name;