import angular from 'angular';
import { AddBlogComponent } from './add-blog.component';
import './add-blog.scss';

export const AddBlogModule = angular.module('addBlogModule', [])
    .component('addBlog', AddBlogComponent)
    .name;