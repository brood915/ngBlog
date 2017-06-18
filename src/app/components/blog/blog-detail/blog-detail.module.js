import angular from 'angular';
import { BlogDetailComponent } from './blog-detail.component';
import './blog-detail.scss';

export const BlogDetailModule = angular.module('blogDetailModule', [])
    .component('blogDetail', BlogDetailComponent)
    .name;