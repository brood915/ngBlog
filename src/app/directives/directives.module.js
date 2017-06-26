import angular from 'angular';
import { ConfirmModule } from './confirm/confirm.module';
import { ModalModule } from './modal/modal.module';

export const DirectivesModule = angular
  .module('app.directives', [
    ConfirmModule,
    ModalModule
  ])
  .name;