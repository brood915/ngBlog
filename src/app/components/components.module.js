import angular from 'angular';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

export const ComponentsModule = angular.module('componentsModule', [HomeModule, AboutModule])
  .name;