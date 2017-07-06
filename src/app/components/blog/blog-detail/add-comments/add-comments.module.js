import angular from 'angular';
import { AddCommentsComponent } from './add-comments.component';
import './add-comments.scss';

export const AddCommentsModule = angular.module('addCommentsModule', [])
    .component('addComments', AddCommentsComponent)
    .name;