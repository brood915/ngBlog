import angular from 'angular';
import { AboutComponent } from './about.component';
import './about.scss';

export const AboutModule = angular.module('aboutModule', [])
    .component('about', AboutComponent)
    .name;