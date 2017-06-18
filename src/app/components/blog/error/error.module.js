import angular from 'angular';
import { ErrorComponent } from './error.component';
import './error.scss';

export const ErrorModule = angular.module('errorModule', [])
    .component('error', ErrorComponent)
    .name;