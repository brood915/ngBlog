import angular from 'angular';
import { RegisterComponent } from './register.component';
import './register.scss';

export const RegisterModule = angular.module('registerModule', [])
    .component('register', RegisterComponent)
    .name;