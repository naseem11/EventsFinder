import { Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventDetailsResolver } from './services/eventDetailsResolver.sevice';



export const routes: Routes = [

    // {path:'', redirectTo:'events', pathMatch:'full'},
    // {path:'events ',component:HomeComponent},
    // {path:'events/music', component:EventsListComponent},
    // {path:'events/sports', component:EventsListComponent},
    // {path:'events/arts_theater', component:EventsListComponent},
    // {path:'events/family', component:EventsListComponent},
    // {path:'events/films', component:EventsListComponent},
    // {path:'events/:id', component:EventDetailsComponent}
    {path: '', redirectTo: 'events/upcoming', pathMatch: 'full'},
    // {path:'events/upcoming', component:EventsListComponent},
    {path: 'events/:keyword', component: EventsListComponent},
    {path: 'events/:keyword/:id', component: EventDetailsComponent , resolve: {event: EventDetailsResolver}}
    // {path:'events/music', component:EventsListComponent},
    // {path:'events/sports', component:EventsListComponent},
    // {path:'events/arts_theater', component:EventsListComponent},
    // {path:'events/family', component:EventsListComponent},
    // {path:'events/films', component:EventsListComponent},
    // {path:'events/:id', component:EventDetailsComponent}
];
