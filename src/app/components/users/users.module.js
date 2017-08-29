import angular from 'angular';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserService } from './users.service';
import { ProfileModule } from './profile/profile.module';

export const UsersModule = angular.module('usersModule', [LoginModule, RegisterModule, ProfileModule])
    .service('userService', UserService)
    .name;