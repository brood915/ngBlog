import angular from 'angular';

class AddBlogDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
    }
  }

  link(scope, element, attrs) { //remember that scope value is parsed and evaluted while attrs is always string.
      element.on('click', function() {
          let form = document.getElementById('formContainer');
          let content = document.getElementById('blogItems');

         if (form.classList.contains("hide"))
          {
              form.classList.remove("hide");
              content.classList.add("hide");
          }
          else {
              form.classList.add("hide");
              content.classList.remove("hide");
          }
      })
  }

  static create() {
    return new AddBlogDirective(...arguments);
  }
}

AddBlogDirective.create.$inject = [];

export { AddBlogDirective };