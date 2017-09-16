import angular from 'angular';
import { NotFoundModule } from './not-found/not-found.module';
import { NoAuthModule } from './no-auth/no-auth.module';
import { UnexpectedModule } from './unexpected/unexpected.module';



export const ErrorsModule = angular.module('errorssModule', [NotFoundModule, NoAuthModule, UnexpectedModule])
    .name;