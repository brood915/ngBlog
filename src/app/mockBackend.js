import posts from '../assets/blog.json';

export default function($httpBackend) {
    /* @ngInject */
  $httpBackend.whenGET('/posts').respond(posts);

  $httpBackend.whenRoute('GET', '/post/:id')
  .respond((method, url, data, headers, params) => {
    const post = posts.find((each,index) => each.id === params.id);
    return [200, post];
  });

  $httpBackend.whenPOST('/posts/add').respond((method, url, data) => {
    posts.push(JSON.parse(data));
    return [200, posts, {}];
  });

  $httpBackend.whenRoute('PUT', '/posts/edit/:id')
    .respond((method, url, data, headers, params) => {
      const parsedData = JSON.parse(data);
      const ids = posts.map((each) => Number(each.id));
      const index = ids.indexOf(Number(parsedData.id));
      posts[index] = parsedData;
      return [200, posts];
    });

  $httpBackend.whenRoute('DELETE', '/posts/delete/:id')
    .respond((method, url, data, headers, params) => {
      const toDelete = posts.find((each) => each.id === params.id);
      const index = posts.indexOf(toDelete);
      posts.splice(index, 1);
      return [200, posts];
    });
}