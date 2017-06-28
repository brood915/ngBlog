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
    this.selectOptions = ['title', 'oldest', 'recent'];

    if (!this.blogService.blogItems){ //initialize data if not present yet
      this.blogService.getData()
      .then((resp) => 
      {
        this.blogService.blogItems = resp; 
        this.blogItems = resp;
        this.sortBy = 'recent';
      });
    }
    else {
      this.blogItems = this.blogService.blogItems;
      this.sortBy = 'recent';
    }
  }

  isShort (desc) {
    if (desc.length < 100) {
      return true;
    }

    this.shortened = desc.substr(0, 99) + "...";
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
    