import angular from 'angular';
import { BlogComponent } from './blog.component';
import './blog.scss';

export const BlogModule = angular.module('blogModule', [])
    .component('blog', BlogComponent)
    .name;