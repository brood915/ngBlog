import template from './blog-detail.html';

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams,$state,$scope) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
  }


  $onInit() {
    this.blogItems = this.blogService.blogItems;

    if (this.blogItems){
    //find the blogitem with the same id as the one passed to param
    this.item = this.blogItems.find((each) => each.id === Number(this.$stateParams.blogId));
    this.resetComment(); //to get the next id # of comment initially
  }
    else { //if blogitem not found
      this.$state.go('404'); //redirect to /404 to display error message
    }
  }

  addComment () {
    this.item.comments.push(this.comment);
    this.resetComment(); //to get the next id # after adding a comment
     console.log(this.item.comments)
  }

 resetComment () {
   this.comment = {
     "id": this.item.comments.length +1,
     "text": ""
   }
   this.item.comments.map((each,index)=> each.id = index); //change the id #s to prevent duplicates
 }

 deleteComment (index) {
   this.$scope.$apply(this.item.comments.splice(index,1)); //to allow confirm directive to update view after running this
   this.resetComment();
   console.log(this.item.comments)
 }


}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {index:'<'}
}
    