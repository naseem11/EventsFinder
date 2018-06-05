import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {


  events$: any;
  sortBy = 'name';
  keyword = '';
  private subscription: Subscription;

  constructor(private eventSr: EventService , private router: Router, private route: ActivatedRoute) { }



  ngOnInit() {



     this.subscription = this.route.paramMap
      .subscribe((params: Params) => {


        this.keyword = params.get('keyword') ;
        console.log(this.keyword);
        this.events$ = this.eventSr.getEvents(this.keyword);




      });






  }

  ngOnDestroy() {

     this.subscription.unsubscribe();

  }

  onSelection(event: any) {

    console.log(event);
    this.router.navigate([ event.id], {relativeTo: this.route});
  }

}
