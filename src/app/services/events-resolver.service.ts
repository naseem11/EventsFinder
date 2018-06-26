import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';

@Injectable()
export class EventsResolver implements Resolve<any>{
    constructor(private eventService:EventService, private router:Router){}
    
    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
        
        let keyword =route.params['keyword'];        
        if (keyword === undefined) {
          this.router.navigate(['/events', { keyword: 'upcoming' }]);

        } else {
         
          return this.eventService.getEvents(keyword, route.params['page']);

        }
    }
}