import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  showMap = false;

  constructor(private eventSr: EventService, private route: ActivatedRoute ,private router:Router){ 
  
  }



  ngOnInit( ) {

   const event=this.route.snapshot.data['event'];
        
    if (event ){

      this.event=event;
    }else{
      
       
     this.router.navigate(['/not-found']);
     
    }
  

}

getImgUrl() {

 const images = this.event.images;
  for (const image of images) {

    if (image.width === 640 && image.height === 427) {

      return image.url;
    }
  }
}

convertToNumber(numberString: string): number {

   return Number(numberString);
}



isOffsale():boolean{

  return (this.event.dates.status.code==='offsale')||(this.event.dates.status.code=== 'cancelled')
}



}

