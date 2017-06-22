import angular from 'angular';

class ConfirmDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {};
    }

  link(scope, element, attrs) {
    let msg = attrs.message || 'Are you sure?';
    let clickAction = attrs.confirmedClick;
    element.on('click', function(e) {
      if (window.confirm(msg)) { //if user clicks ok to the confirm message
        scope.$eval(clickAction);
      }
    })
    console.log(scope.blogPost)

  }

  static create() {
    return new ConfirmDirective(...arguments);
  }
}

ConfirmDirective.create.$inject = [];

export { ConfirmDirective };