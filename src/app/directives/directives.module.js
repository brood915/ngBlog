import angular from 'angular';
import { ConfirmModule } from './confirm/confirm.module';

export const DirectivesModule = angular
  .module('app.directives', [
    ConfirmModule
  ])
  .name;