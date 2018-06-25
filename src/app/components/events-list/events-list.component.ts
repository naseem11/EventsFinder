import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';




@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {


  events: any[];
  sortBy = 'name';
  keyword = '';
  showMessage = false;
  errorMessage = '';
  numberOfPages: number;
  currentPage: number;

  private paramSubscription: Subscription;
  private serviceSubscription: Subscription;

  constructor(private eventSr: EventService, private router: Router, private route: ActivatedRoute) {

  }



  ngOnInit() {

    const urlParams = Observable.combineLatest(this.route.params, this.route.queryParams,
                                                (params, queryParams) => ({ ...params, ...queryParams }));
    this.paramSubscription = urlParams.subscribe((routeParams: Params) => {
      console.log(routeParams);
      this.keyword = routeParams.keyword;      
      this.serviceSubscription = this.eventSr.getEvents(routeParams.keyword, routeParams.page)
        .subscribe((results: any) => {
          if (results.events.length === 0) {

            this.events = null;
            this.showError('Sorry ! no results to show, Please check your search term.');
          } else {

            this.events = results.events;
            this.numberOfPages = results.pages;
            this.currentPage = results.pageNumber;
          }

        },
          (error: Error) => {
            this.showError('Bad request , couldn\'t find the requested resource.' );

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

  private showError(errorText: string) {

    this.showMessage = true;
    this.errorMessage = errorText;
    setTimeout(() => {
      this.showMessage = false;
    }
      , 4000);
  }

  loadPage(pageNumber: number) {

    this.router.navigate(['.'], { relativeTo: this.route, queryParams: { page: pageNumber } });
  }


}
