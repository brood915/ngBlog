import angular from 'angular';
import { NavComponent } from './nav.component';
import './nav.scss';

export const NavModule = angular.module('navModule', [])
    .component('myNav', NavComponent)
    .name;