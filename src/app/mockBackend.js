import posts from '../assets/blog.json';

export default function($httpBackend) {
    /* @ngInject */
  $httpBackend.whenGET('/posts').respond(posts);

  $httpBackend.whenPOST('/posts/add').respond((method, url, data) => {
    posts.push(JSON.parse(data));
    return [200, posts, {}];
  });

  $httpBackend.whenRoute('PUT', '/posts/edit/:id')
    .respond((method, url, data, headers, params) => {
      const updated = posts.find((each,index) => each.id === params.id);
      const index = posts.indexOf(updated);
      posts[index] = data;
      return [200, posts];
    });

  $httpBackend.whenRoute('DELETE', '/posts/delete/:id')
    .respond((method, url, data, headers, params) => {
      const afterDelete = posts.filter((each) => each.id !== params.id);
      return [200, afterDelete];
    });
}