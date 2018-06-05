import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import {   ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  showMap = false;
  constructor(private eventSr: EventService, private route: ActivatedRoute) { }



  ngOnInit( ) {

    this.event = this.route.snapshot.data['event']  ;
  //  this.event=this.eventSr.getEvent(eventID);
  //  console.log(this.event);


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

}
