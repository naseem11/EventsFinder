import { Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventResolver } from './services/event-resolver.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsResolver } from './services/events-resolver.service';



export const routes: Routes = [


    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'events', component: EventsListComponent, resolve:{results:EventsResolver}},
    {path: 'events/:id', component: EventDetailsComponent  , resolve: {event: EventResolver} },
    {path: '**', component: NotFoundComponent}

];


