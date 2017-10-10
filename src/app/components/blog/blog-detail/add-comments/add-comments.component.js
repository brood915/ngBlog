import template from './add-comments.html';
import angular from "angular";
import uuid from 'uuid/v4';

class AddCommentsCtrl {
    /* @ngInject */
  constructor($scope, blogService) {
      this.$scope = $scope;
      this.blogService = blogService;
  }


  $onInit() {
    this.resetComment();
  }

  deleteItem (item, arr) {
    const ele = arr.find((element) => element.id === item.id);
    const index = arr.indexOf(ele);
    arr.splice(index, 1);
  }

  likeComment(comment) {
    comment.likes++;
    this.blogService.update(this.param, this.post);
    
  }

  dislikeComment(comment) {
    comment.dislikes++;
    this.blogService.update(this.param, this.post);
  }

  likeReply(reply) {
    reply.likes++;
    this.blogService.update(this.param, this.post);
  }

  dislikeReply(reply) {
    reply.dislikes++;
    this.blogService.update(this.param, this.post);
  }


  addComment () {
    this.comment.date = this.blogService.getDate();
    let comment = angular.copy(this.comment);
    comment.id = uuid();
    this.post.comments.push(comment);
    this.blogService.update(this.param, this.post);
    this.resetComment();
  }

  startReplying (comment) {
    this.resetReply(comment);
    comment.replying = !comment.replying;
  }

  addReply (comment) {
    comment.reply.date = this.blogService.getDate();
    let reply = angular.copy(comment.reply);
    reply.id = uuid();
    comment.replies.push(reply);
    comment.seeReplies = true; //shows replies after adding reply to the comment
    comment.replying = false;
    this.blogService.update(this.param, this.post);
    this.resetComment(); 
  }

   deleteComment (comment) {
    this.$scope.$apply(this.deleteItem(comment, this.post.comments)); //apply used to allow confirm directive to update view after running this
    this.blogService.update(this.param, this.post);
    this.resetComment();
 }

  deleteReply (comment, reply) {
    const replies = comment.replies;
    this.$scope.$apply(this.deleteItem(reply, replies));
    this.blogService.update(this.param, this.post);
    this.resetComment();
  }

  edit(comment) { //pass comment or reply
    if (comment.editing === undefined){
      comment.editing = true;
    }
    else {
    comment.editing = !comment.editing;
    }
    comment.edited = true;
    this.blogService.update(this.param, this.post);
  }

  resetReply (comment) {
    comment.reply = {
      "id": "",
      "text": "",
      "name": "",
      "date":"",
      "likes": 0,
      "dislikes": 0
    }
  }

  
 resetComment () {
   this.comment = {
     "id": "",
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
  bindings: {
    post: "<", 
    posts: "<",
    param: "<"
  }
}
    