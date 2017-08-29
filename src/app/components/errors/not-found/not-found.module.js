import angular from 'angular';
import { NotFoundComponent } from './not-found.component';
import './not-found.scss';

export const NotFoundModule = angular.module('notFoundModule', [])
    .component('notFound', NotFoundComponent)
    .name;