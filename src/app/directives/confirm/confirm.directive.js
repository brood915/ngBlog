import angular from 'angular';

class ConfirmDirective {
  constructor() {
    this.restrict = 'A';
    this.scope = {
      message: "@",
      confirmedClick: "&"};
    }

  link(scope, element, attrs) { //remember that scope value is parsed and evaluted while attrs is always string.
    let msg = scope.message || "Are you sure?";
    let clickAction = scope.confirmedClick;
    element.on('click', function(e) {
      if (window.confirm(msg)) { //if user clicks ok to the confirm message
        clickAction();
      }
    })
  }

  static create() {
    return new ConfirmDirective(...arguments);
  }
}

ConfirmDirective.create.$inject = [];

export { ConfirmDirective };