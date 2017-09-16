import angular from 'angular';
import { UnexpectedComponent } from './unexpected.component';
import './unexpected.scss';

export const UnexpectedModule = angular.module('unexpectedModule', [])
    .component('unexpected', UnexpectedComponent)
    .name;