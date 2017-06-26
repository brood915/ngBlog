import angular from 'angular';
import { BlogComponent } from './blog.component';
import './blog.scss';
import { BlogDetailModule } from './blog-detail/blog-detail.module';
import { BlogService } from './blog.service';
import { ErrorModule } from './error/error.module';
import { AddBlogModule } from './add-blog/add-blog.module';
import { EditBlogModule } from './edit-blog/edit-blog.module';

export const BlogModule = angular.module('blogModule', [BlogDetailModule, ErrorModule, AddBlogModule, EditBlogModule])
    .component('blog', BlogComponent)
    .service('blogService', BlogService)
    .name;