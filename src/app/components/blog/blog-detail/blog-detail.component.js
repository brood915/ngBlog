import template from './blog-detail.html';
import angular from "angular";

class BlogDetailCtrl {
    /* @ngInject */
  constructor(blogService,$stateParams,$state,$scope, $timeout) {
      this.blogService = blogService;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.$timeout = $timeout;
  }


  $onInit() {
    this.blogItems = this.blogService.blogItems;

    if (this.blogItems){
      this.getBlog();
      this.resetComment(); //to get the next id # of comment initially
      this.item.views++; //increases view count when this page is activated
    }
    else { //if blogitem not found
      this.$state.go('404'); //redirect to /404 to display error message
    }
  }

  likeBlog() {
    this.item.likes++;
  }

  dislikeBlog() {
    this.item.dislikes++;
  }
 
  deleteBlog() {
    this.blogService.deleteBlog(this.blogItems, this.item.id);
    this.$state.go('blog');
  }

  getBlog () {
     //find the blogitem with the same id as the one passed to param
    this.item = this.blogItems.find((each) => each.id === Number(this.$stateParams.blogId));
  }

  editBlog (event) { //passes the function down to edit-blog child comp
    this.blogItems = event.blogItems;
    this.getBlog();  
  }

  addComment () {
    this.item.comments.push(this.comment);
    this.resetComment(); //to get the next id # after adding a comment
  }

  startReplying (index) {
    this.resetReply(index);
    this.item.comments[index].replying = !this.item.comments[index].replying;
  }

  addReply (index) {
    let reply = angular.copy(this.item.comments[index].reply);
    this.item.comments[index].replies.push(reply);
    this.item.comments[index].seeReplies = true; //shows replies after adding reply to the comment
    this.resetComment(); 
    this.resetReply(index);
  }

   deleteComment (index) {
    this.$scope.$apply(this.item.comments.splice(index,1)); //apply used to allow confirm directive to update view after running this
    this.item.comments.map((each,index)=> each.id = index); //change the id #s to prevent duplicates
    this.resetComment();
 }

  deleteReply (ind) {
    const replies = this.item.comments[ind].replies;
    this.$scope.$apply(replies.splice(ind,1));
    replies.map((each,index)=> each.id = index);
    this.resetComment();
    this.resetReply(ind);   
  }

  resetReply (index) {
    this.item.comments[index].reply = {
      "id": this.item.comments[index].replies.length,
      "text": "",
      "name": "",
      "date":"",
    }
  }

 resetComment () {
   this.comment = {
     "id": this.item.comments.length,
     "text": "",
     "replies":[],
     "name":"",
     "date" : "",
     "expanding": false,
     "replying": false,
     "seeReplies": false
   }
 }
}


export const BlogDetailComponent = {
  controller: BlogDetailCtrl,
  template,
  bindings: {}
}
    