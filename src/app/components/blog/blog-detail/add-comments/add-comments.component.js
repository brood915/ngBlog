import template from './add-comments.html';
import angular from "angular";

class AddCommentsCtrl {
    /* @ngInject */
  constructor($scope, blogService) {
      this.$scope = $scope;
      this.blogService = blogService;
  }


  $onInit() {
    this.resetComment();
    this.blog = this.blogService.blog;
  }

  deleteItem (item, arr) {
    const ele = arr.find((element) => element === item);
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

  likeReply(comment, reply) {
    reply.likes++;
     this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment);
  }

  dislikeReply(comment, reply) {
    reply.dislikes++;
     this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment);
  }


  addComment () {
    this.comment.date = this.blogService.getDate();
    this.comment.name = this.user.payload.name;
    let comment = angular.copy(this.comment);
    this.post.comments.push(comment);
    this.blogService.addData(`/api/posts/${this.param}/comments/create/`, this.comment)
    .then((resp) => {
      this.post.comments = resp.data;
    })
    this.resetComment();
  }

  startReplying (comment) {
    this.resetReply(comment);
    comment.replying = !comment.replying;
  }

  addReply (comment) {
    comment.reply.date = this.blogService.getDate();
    comment.reply.name = this.user.payload.name;
    comment.seeReplies = true;
    let reply = angular.copy(comment.reply);
    comment.replies.push(reply);
    comment.replying = false;
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment);
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
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment);
    this.resetComment();
  }

  showEdit(comment) { //pass comment or reply
    if (comment.editing === undefined){
      comment.editing = true;
    }
    else {
    comment.editing = !comment.editing;
    }
  }

  edit(comment, type) { //we edit comment regardless of whether we r updating the comment or its replies.
    comment.edited = true;
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment);
    type.editing = false;
  }

  resetReply (comment) {
    comment.reply = {
      "text": "",
      "date":this.blogService.getDate(),
      "likes": 0,
      "dislikes": 0
    }
  }

  
 resetComment () {
   this.comment = {
     "text": "",
     "date" : this.blogService.getDate(),
     "expanding": false,
     "replying": false,
     "seeReplies": false,
     "likes": 0,
     "dislikes": 0,
     "replies": []
   }
 }
}


export const AddCommentsComponent = {
  controller: AddCommentsCtrl,
  template,
  bindings: {
    post: "<", 
    posts: "<",
    param: "<",
    user: "<"
  }
}
    