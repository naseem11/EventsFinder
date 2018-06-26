import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {


  events: any[];
  sortBy = 'date';
  keyword = '';
  showMessage = false;
  errorMessage = '';
  numberOfPages: number;
  currentPage: number;
  private serviceSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {

  }



  ngOnInit() {


    this.serviceSubscription = this.route.data.subscribe((data: any) => {
      let results = data['results'];
      this.keyword = this.route.snapshot.params['keyword'];
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
        this.showError('Bad request , couldn\'t find the requested resource.');

      });



  }



  ngOnDestroy() {


    this.serviceSubscription.unsubscribe();

  }

  onSelection(event: any) {
       
    this.router.navigate(['events', event.id]);
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
    window.scroll(0,0);
    this.router.navigate(['/events', { keyword: this.route.snapshot.params['keyword'], page: pageNumber }]);

   


  }


  

}
