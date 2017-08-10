import angular from 'angular';
import { LoginModule } from './login/login.module';
import { BlogModule } from './blog/blog.module';

export const ComponentsModule = angular.module('componentsModule', [LoginModule, BlogModule])
  .name;