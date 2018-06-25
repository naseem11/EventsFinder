import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { DatesHelper } from '../../shared/dates.helper';
import { Config } from '../../shared/config';





@Injectable()
export class EventService {

  private apiKey = Config.ticketMasterKey;
  private rootUrl = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
  private countryCode = 'IE';
  private url = '';
  private allEvents: any[];



  constructor(private http: Http) { }

  getEvents(keyword: string, pageNumber: string) {

    this.url = this.getUrl(keyword, pageNumber);
    return this.http.get(this.url)
      .map((response: Response) => {



        if (response.status === 200) {
          const resultJson = response.json();
          if (resultJson['page']['totalElements'] === 0) {
            return { events: [], pages: 0 };

          } else {

            this.allEvents = resultJson['_embedded']['events'];
            return { events: resultJson['_embedded']['events'], pages: resultJson['page'].totalPages, pageNumber: resultJson['page'].number };


          }
        } else {

          throw new Error('An unexpected error occured !!');
        }



      });



  }


  getEvent(id: string) {

    if (this.allEvents) {

      const userSelectedEvent = this.allEvents.find((event) => event.id === id);
      if (userSelectedEvent) {

        return userSelectedEvent;
      }


    }
    this.url = this.rootUrl + this.apiKey + '&id=' + id + '&countryCode=' + this.countryCode;
    return this.http.get(this.url)
      .map((response: Response) => {
        console.log('response for single event', response);
        if (response.status === 200) {

          if (response.json()['page']['totalElements'] === 0) {
            return null;

          } else {


            return response.json()['_embedded']['events'][0];


          }
        } else {

          throw new Error('An unexpected error occured !!');
        }


      });




  }





  private getUrl(keyword: string, pageNumber: string): string {

    if (keyword === 'upcoming') {
      const startDateTime = DatesHelper.formatDate(new Date());
      const nextDate = DatesHelper.getNextDate(new Date(), 7);
      const endDateTime = DatesHelper.formatDate(nextDate);
      if (pageNumber) {

        return this.rootUrl + this.apiKey + '&startDateTime=' + startDateTime + '&endDateTime=' + endDateTime + '&page=' + pageNumber + '&countryCode=' + this.countryCode;
      }
      return this.rootUrl + this.apiKey + '&startDateTime=' + startDateTime + '&endDateTime=' + endDateTime + '&countryCode=' + this.countryCode;


    } else {

      if (pageNumber) {

        return this.rootUrl + this.apiKey + '&keyword=' + keyword + '&page=' + pageNumber + '&countryCode=' + this.countryCode;
      }


      return this.rootUrl + this.apiKey + '&keyword=' + keyword + '&countryCode=' + this.countryCode;


    }
  }
}








