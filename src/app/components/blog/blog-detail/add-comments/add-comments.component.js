import template from './add-comments.html';
import angular from "angular";

class AddCommentsCtrl {
    /* @ngInject */
  constructor($scope, blogService) {
      this.$scope = $scope;
      this.blogService = blogService;
  }


  $onInit() {
    if (this.blogItems){
      this.resetComment();
    }
  }

  likeComment(index) {
    this.item.comments[index].likes++;
  }

  dislikeComment(index) {
    this.item.comments[index].dislikes++;
  }

  addComment () {
    this.comment.date = this.blogService.getDate();
    let comment = angular.copy(this.comment);
    this.item.comments.push(comment);
    this.resetComment(); //to get the next id # after adding a comment
  }

  startReplying (index) {
    this.resetReply(index);
    this.item.comments[index].replying = !this.item.comments[index].replying;
  }

  addReply (index) {
    this.item.comments[index].reply.date = this.blogService.getDate();
    let reply = angular.copy(this.item.comments[index].reply);
    this.item.comments[index].replies.push(reply);
    this.item.comments[index].seeReplies = true; //shows replies after adding reply to the comment
    this.item.comments[index].replying = false;
    console.log(reply)
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
      "likes": 0,
      "dislikes": 0
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
     "seeReplies": false,
     "likes": 0,
     "dislikes": 0
   }
 }
}


export const AddCommentsComponent = {
  controller: AddCommentsCtrl,
  template,
  bindings: {item: "<", blogItems: "<"}
}
    