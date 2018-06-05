import { Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventDetailsResolver } from './services/eventDetailsResolver.sevice';



export const routes: Routes = [

    
    {path: '', redirectTo: 'events/upcoming', pathMatch: 'full'},    
    {path: 'events/:keyword', component: EventsListComponent},
    {path: 'events/:keyword/:id', component: EventDetailsComponent , resolve: {event: EventDetailsResolver}}
   
];
