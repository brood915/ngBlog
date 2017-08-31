import angular from 'angular';
import { NoAuthComponent } from './no-auth.component';
import './no-auth.scss';

export const NoAuthModule = angular.module('noAuthModule', [])
    .component('noAuth', NoAuthComponent)
    .name;