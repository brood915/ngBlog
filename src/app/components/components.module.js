import angular from 'angular';
import { HomeModule } from './home/home.module';
import { BlogModule } from './blog/blog.module';

export const ComponentsModule = angular.module('componentsModule', [HomeModule, BlogModule])
  .name;