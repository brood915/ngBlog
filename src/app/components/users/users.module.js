import angular from 'angular';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserService } from './users.service';

export const UsersModule = angular.module('usersModule', [LoginModule,RegisterModule])
    .service('userService', UserService)
    .name;