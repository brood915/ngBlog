import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService, userService, $scope) {
    this.blogService = blogService;
    this.userService = userService;
    this.$scope = $scope;
  }

  $onInit() {
    this.user = this.userService.user;
    this.filterValue = "";
    this.selectOptions = ['titles', 'oldest', 'recent', 'liked' ,'viewed', 'discussed'];
    this.blogService.getBlogs()
    .then(data => {
      this.blogItems = data;
      this.blogService.blogItems = data;
      this.sortBy = 'recent';
      this.handleSort();
    });
  }

  isShort (desc) {
    if (desc.length < 100) {
      return true;
    }

    this.shortened = desc.substr(0, 99) + "...";
    return false;
  }

 isNew(blogDate) {
    let date = new Date();
    let isNew = date - new Date(blogDate);
    let hours = isNew/3600000; //converts ms to hr
  
    
    if(hours < 72 ) {
      return true;
    }

    return false;
  }

  handleSort (){
      if (this.sortBy === "titles") {
        function asc(a, b) {
          const title1 = a.title.toLowerCase();
          const title2 = b.title.toLowerCase();
          if (title1 < title2) return -1;
          else if (title1 > title2) return 1;
          else return 0;
        }
        this.blogItems.sort(asc);
      }
      else if (this.sortBy === 'oldest') {
        this.blogItems.sort(function(a,b){
          return new Date(a.date) - new Date(b.date);
        });
      }
      else if (this.sortBy === 'recent') {
        this.blogItems.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);        
        });
      }

      else if (this.sortBy === "liked") {
        this.blogItems.sort(function(a,b) {
          return b.likes - a.likes;
        });
      }

      else if (this.sortBy === "viewed") {
        this.blogItems.sort(function(a,b) {
          return b.views - a.views;
        });
      }
      else if (this.sortBy === "discussed") {
        this.blogItems.sort(function(a,b) {
          return b.comments.length - a.comments.length;
        });
      }      
    }


  deleteBlog (id) {
   this.$scope.$apply(()=>{
   this.blogService.deleteBlog(id).then((resp) => 
   {
     this.blogItems = resp.data;
     this.blogService.blogItems = resp.data;
    });
 })}
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    