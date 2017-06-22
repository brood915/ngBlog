import angular from 'angular';
import { ConfirmDirective } from './confirm.directive';
import './confirm.scss';

export const ConfirmModule = angular.module('confirmModule', [])
    .directive('confirm', ConfirmDirective.create)
    .name;