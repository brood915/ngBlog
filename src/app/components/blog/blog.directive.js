import angular from 'angular';

class BlogDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
    }
  }

  link(scope, element, attrs) { //remember that scope value is parsed and evaluted while attrs is always string.
      element.on('click', function() {
          let form = document.getElementById('formContainer');
         if (form.classList.contains("hideModal"))
          {
              form.classList.remove("hideModal");
          }
          else {
              form.classList.add("hideModal");
          }
      })
  }

  static create() {
    return new BlogDirective(...arguments);
  }
}

BlogDirective.create.$inject = [];

export { BlogDirective };