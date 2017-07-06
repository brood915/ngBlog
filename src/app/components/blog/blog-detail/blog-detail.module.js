import angular from 'angular';
import { BlogDetailComponent } from './blog-detail.component';
import { AddCommentsModule } from './add-comments/add-comments.module'
import './blog-detail.scss';

export const BlogDetailModule = angular.module('blogDetailModule', [AddCommentsModule])
    .component('blogDetail', BlogDetailComponent)
    .name;