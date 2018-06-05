import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent  {
  @Input()event: any;
  constructor() { }




  getUrl(): string {

    for (const image of this.event.images) {

      if (image.height === 427 && image.width === 640) {

        return image.url;
      }
    }
  }
}
