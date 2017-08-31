import angular from 'angular';
import { ProfileComponent } from './profile.component';
import './profile.scss';

export const ProfileModule = angular.module('profileModule', [])
    .component('profile', ProfileComponent)
    .name;