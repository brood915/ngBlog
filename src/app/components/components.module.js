import angular from 'angular';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { ErrorModule } from './error/error.module';

export const ComponentsModule = angular.module('componentsModule', [UsersModule, ErrorModule, BlogModule])
  .name;