import angular from 'angular';
import { AddBlogComponent } from './add-blog.component';
import './add-blog.scss';
import { AddBlogDirective } from './add-blog.directive';

export const AddBlogModule = angular.module('addBlogModule', [])
    .component('addBlog', AddBlogComponent)
    .directive('addBlogModal', AddBlogDirective.create)
    .name;