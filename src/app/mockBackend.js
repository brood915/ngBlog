import posts from '../assets/blog.json';

export default function($httpBackend) {
    /* @ngInject */
  $httpBackend.whenGET('/posts').respond(posts);

    $httpBackend.whenGET('/post').respond(() => {
    return [200, posts, {}];
  });

  $httpBackend.whenPOST('/posts').respond((method, url, data) => {
    posts.push(JSON.parse(data));
    return [200, posts, {}];
  });
}