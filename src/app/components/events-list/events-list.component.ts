import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {


  events: any[];
  sortBy = 'name';
  keyword = '';
  private paramSubscription: Subscription;
  private serviceSubscription: Subscription

  constructor(private eventSr: EventService, private router: Router, private route: ActivatedRoute,public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    
     }



  ngOnInit() {



    this.paramSubscription = this.route.paramMap
      .subscribe((params: Params) => {
                  this.keyword = params.get('keyword');
                  this.serviceSubscription= this.eventSr.getEvents(this.keyword)
                  .subscribe((events: any[]) => {
                            if (events.length === 0) {
                              this.events=null;
                              this.showError();
                            } else {

                                this.events = events;
                              }

                        },
                        (error: Error) => {
                            alert("An unexpected error occured !!");

                            });




      });






  }

 

  ngOnDestroy() {

    this.paramSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();

  }

  onSelection(event: any) {

    console.log(event);
    this.router.navigate([event.id], { relativeTo: this.route });
  }

  private showError() {
    this.toastr.error('Oops!! Your search did not return any event, Please check your search term.');
  }


}
