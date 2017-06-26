import angular from 'angular';

class ModalDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
        formName: '@'
    }
  }

  link(scope, element, attrs) { //remember that scope value is parsed and evaluted while attrs is always string.
      element.on('click', function() {
          let form = document.getElementById(scope.formName);
          let content = document.getElementById('blogItems') || document.getElementById('blogDetail');

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
    return new ModalDirective(...arguments);
  }
}

ModalDirective.create.$inject = [];

export { ModalDirective };