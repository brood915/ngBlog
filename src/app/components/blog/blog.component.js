import template from './blog.html';


class BlogCtrl {
  /* @ngInject */
  constructor(blogService, $scope) {
    this.blogService = blogService;
    this.$scope = $scope;
    this.$scope.$watch(()=>this.sortBy, ()=>this.handleSort());
  }

  $onInit() {
    this.filterValue = "";
    this.selectOptions = ['title', 'oldest', 'recent', 'liked' ,'viewed', 'discussed'];
    this.sortBy = 'recent';
    this.blogService.getData()
    .then(data => {
      this.blogItems = data;
      this.blogService.blogItems = data;
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
      if (this.sortBy === 'oldest') {
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


  deleteBlog (index) {
   this.$scope.$apply(()=>{
   this.blogService.deleteBlog(this.blogItems, index);
 })}
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    