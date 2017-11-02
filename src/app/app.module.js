import "babel-polyfill";
import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import { CommonModule } from './common/common.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import uiRouter from '@uirouter/angularjs';
import 'angular-jwt';
import "angular-ui-bootstrap";

export const AppModule = angular.module('app', ['ui.bootstrap','angular-jwt', CommonModule, ComponentsModule, DirectivesModule, uiRouter])
  .component('app', AppComponent)
  .config(/* @ngInject */($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.when('/', '/blog');
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state('register', {
        url: '/register',
        component: 'register'
      })
      .state('login', {
        url: '/login',
        component: 'login'
      })
      .state('profile', {
        url:'/profile',
        component: 'profile'
      })
      .state('blog', {
        url: '/blog',
        component: 'blog'
      })
      .state('addBlog', {
        url: '/blog/add',
        component: 'addBlog'
      })
      .state('search', {
        url: '/blog/search',
        component: 'search'
      })
      .state('post', {
        name: 'post',
        url: '/blog/{blogId}',
        component: 'blogDetail'
      })
      .state('404', {
        name: '404',
        url: '/404',
        component: 'notFound'
      })
      .state('401', {
        name: '401',
        url: '/401',
        component: 'noAuth'
      })
      .state('500', {
        name: '500',
        url: '/500',
        component: 'unexpected'
      })
      
      $locationProvider.html5Mode(true);
      //to remove # from urls
  })
  .name;