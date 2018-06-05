import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import {routes} from './routes';
import { OrderBy } from '../shared/orderby.pipe';
import { EventDetailsResolver } from './services/eventDetailsResolver.sevice';
import { AgmMapComponent } from './components/agm-map/agm-map.component';
import {AgmCoreModule} from '@agm/core';
import { Config } from '../shared/config';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    EventsListComponent,
    EventComponent,
    EventDetailsComponent,
    OrderBy,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: Config.googleKey
    })
  ],
  providers: [EventService, EventDetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
