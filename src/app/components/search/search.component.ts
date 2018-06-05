import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild(NgModel) userInput: NgModel;

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  onFind() {

    // this.eventSr.getEvents(f.value.keyword);
    this.router.navigate(['/events', this.userInput.value])
    .catch((error) => {

      console.log(error);

    });



  }

}
