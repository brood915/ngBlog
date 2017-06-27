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
   
   this.blogItems.splice(index,1); 
   //to allow confirm directive to update view after running this
   
   this.blogItems.map((each,index)=> each.id = index); 
    //change the id #s to prevent duplicates
 })}
}



export const BlogComponent = {
  template,
  controller: BlogCtrl,
  bindings: {}
}
    