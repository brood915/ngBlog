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

  findItem (item, arr) {
    let ele = arr.find((element) => element.id === item.id);
    let index = arr.indexOf(ele);
    return index;
  }

  deleteItem (item, arr) {
    let index = this.findItem(item, arr);
    arr.splice(index, 1);
  }

  likeComment(comment) {
    comment.likes++;
  }

  dislikeComment(comment) {
    comment.dislikes++;
  }

  likeReply(reply) {
    reply.likes++;
  }

  dislikeReply(reply) {
    reply.dislikes++;
  }


  addComment () {
    this.comment.date = this.blogService.getDate();
    let comment = angular.copy(this.comment);
    this.item.comments.push(comment);
    this.resetComment(); //to get the next id # after adding a comment
  }

  startReplying (comment) {
    this.resetReply(comment);
    comment.replying = !comment.replying;
  }

  addReply (comment) {
    comment.reply.date = this.blogService.getDate();
    let reply = angular.copy(comment.reply);
    comment.replies.push(reply);
    comment.seeReplies = true; //shows replies after adding reply to the comment
    comment.replying = false;
    this.resetComment(); 
    this.resetReply(comment);
  }

   deleteComment (comment) {
    this.$scope.$apply(this.deleteItem(comment, this.item.comments)); //apply used to allow confirm directive to update view after running this
    this.item.comments.map((each,index)=> each.id = index); //change the id #s to prevent duplicates
    this.resetComment();
 }

  deleteReply (comment, reply) {
    const replies = comment.replies;
    this.$scope.$apply(this.deleteItem(reply, replies));
    replies.map((each,index)=> each.id = index);
    this.resetComment();
    this.resetReply(comment);
  }

  edit(comment) { //pass comment or reply
    if (comment.editing === undefined){
      comment.editing = true;
    }
    else {
    comment.editing = !comment.editing;
    }
    comment.edited = true;
  }

  resetReply (comment) {
    comment.reply = {
      "id": comment.replies.length,
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
    