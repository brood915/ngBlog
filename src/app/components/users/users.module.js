import angular from 'angular';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

export const UsersModule = angular.module('usersModule', [LoginModule,RegisterModule])
    .name;