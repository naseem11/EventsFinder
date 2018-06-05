import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { DatesHelper } from '../../shared/dates.helper';
import { Subject } from 'rxjs/Subject';
import { Config } from '../../shared/config';



@Injectable()
export class EventService {

  private apiKey = Config.ticketMasterKey;
  private rootUrl = 'https://app.ticketmaster.com/discovery/v2/events?apikey=';
  private countryCode = 'IE';
  private url = '';
  private allEvents: any[];



  constructor(private http: Http) {   }

  getEvents(keyword: string) {

    this.url=this.getUrl(keyword);
   return this.http.get(this.url)
    .map((response: Response) => {

      this.allEvents = response.json()['_embedded']['events'];
      console.log(response.json());
      return response.json()['_embedded']['events'] ;



          });



  }


  getEvent(id: string) {

    this.url = this.rootUrl + this.apiKey + '&id=' + id + '&countryCode=' + this.countryCode;
    return this.http.get(this.url)
     .map((response: Response) => {
      return response.json()['_embedded']['events'][0];
     });


      }


  private getUrl(keyword:string):string{

        if (keyword === 'upcoming') {
          const startDateTime = DatesHelper.formatDate(new Date());
          const nextDate = DatesHelper.getNextDate(new Date(), 7);
          const endDateTime = DatesHelper.formatDate(nextDate); 
    
          return this.rootUrl + this.apiKey + '&startDateTime=' + startDateTime + '&endDateTime=' + endDateTime + '&countryCode=' + this.countryCode;
    
    
        } else {
    
    
          return this.rootUrl + this.apiKey + '&keyword=' + keyword + '&countryCode=' + this.countryCode;
    
    
        }
      }
}








