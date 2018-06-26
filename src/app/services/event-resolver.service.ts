import {Injectable} from '@angular/core';
import { EventService } from './event.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventSr: EventService) {}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        return this.eventSr.getEvent(route.params['id']);

    }


}


