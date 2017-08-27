import angular from 'angular';
import { LoginComponent } from './login.component';
import './login.scss';

export const LoginModule = angular.module('loginModule', [])
    .component('login', LoginComponent)
    .name;