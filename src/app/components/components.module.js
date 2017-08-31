import angular from 'angular';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { ErrorsModule } from './errors/errors.module';

export const ComponentsModule = angular.module('componentsModule', [UsersModule, ErrorsModule, BlogModule])
  .name;