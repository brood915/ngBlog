import angular from 'angular';
import { SearchComponent } from './search.component';
import './search.scss';

export const SearchModule = angular.module('searchModule', [])
    .component('search', SearchComponent)
    .name;