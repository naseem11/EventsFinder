import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input('totalPages') totalPages:number;
  @Input('currentPage')currentPage:number;
  @Output('pageChange')prevOrNext:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    
  }

  changePage(eventData){

    eventData.target.innerText.trim().toLowerCase()==='prev'?this.currentPage-=1:this.currentPage+=1;        
   
    
    
    if(0<=this.currentPage && this.currentPage<this.totalPages){
      
      this.prevOrNext.emit(this.currentPage);
    }


    
    

  }

 
}
