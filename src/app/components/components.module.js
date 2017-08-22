import angular from 'angular';
import { LoginModule } from './login/login.module';
import { BlogModule } from './blog/blog.module';
import { ErrorModule } from './error/error.module';

export const ComponentsModule = angular.module('componentsModule', [LoginModule, ErrorModule, BlogModule])
  .name;