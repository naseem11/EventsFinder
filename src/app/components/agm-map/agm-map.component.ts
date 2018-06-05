import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent  {
  @Input() title: string;
  @Input() lat: number;
  @Input() lng: number;




}
