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
    
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .then(() => {
        comment.likes++;
    })
    .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
    
  }

  dislikeComment(comment) {
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .then(() => {
       comment.dislikes++;
    })
    .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
  }

  likeReply(comment, reply) {
    reply.likes++;
     this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
      .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
  }

  dislikeReply(comment, reply) {
    reply.dislikes++;
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .catch(()=> {
    this.error = "Something went wrong with our server!"
    });
  }


  addComment () {
    this.comment.date = this.blogService.getDate();
    this.comment.name = this.user.payload.name;
    let comment = angular.copy(this.comment);
    this.blogService.addData(`/api/posts/${this.param}/comments/create/`, this.comment)
    .then((resp) => {
      this.post.comments.push(comment);
      this.post.comments = resp.data;
      this.error = null;
    })
    .catch(() => {
      this.error = "Something went wrong with our server!"
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
    comment.replying = false;
    let reply = angular.copy(comment.reply);
    comment.replies.push(reply);
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .then(() => {
       this.error = null;
    })
    .catch(()=> {
       this.error = "Something went wrong with our server!"
    });
    this.resetComment(); 
  }

   deleteComment (comment) {
    this.blogService.deleteComment(`/api/posts/${this.param}/comments/${comment._id}/delete/`, comment)
    .then(() => {
      this.deleteItem(comment, this.post.comments);
      this.error = null;
    })
    .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
    this.resetComment();
 }

  deleteReply (comment, reply) {
    const replies = comment.replies;
    this.deleteItem(reply, replies);
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .then(() => {
      this.error = null;
    })
    .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
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
    this.blogService.update(`/api/posts/${this.param}/comments/${comment._id}/update/`, comment)
    .then(()=> {
      comment.edited = true;
      this.error = null;
      type.editing = false;
    })
    .catch(()=> {
      this.error = "Something went wrong with our server!"
    });
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
    