import angular from 'angular';
import { ConfirmDirective } from './confirm.directive';

export const ConfirmModule = angular.module('confirmModule', [])
    .directive('confirm', ConfirmDirective.create)
    .name;