import angular from 'angular';
import { ModalDirective } from './modal.directive';

export const ModalModule = angular.module('modalModule', [])
    .directive('modal', ModalDirective.create)
    .name;