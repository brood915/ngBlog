import angular from 'angular';
import { EditBlogComponent } from './edit-blog.component';
import './edit-blog.scss';

export const EditBlogModule = angular.module('editBlogModule', [])
    .component('editBlog', EditBlogComponent)
    .name;