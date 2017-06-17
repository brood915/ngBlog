import angular from 'angular';
import { HomeComponent } from './home.component';
import './home.scss';

export const HomeModule = angular.module('homeModule', [])
    .component('home', HomeComponent)
    .name;