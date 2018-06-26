import { Component } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 dataLoading:boolean=true;
  constructor(private router:Router){

    this.router.events
    .subscribe((routerEvent:Event)=>{

     this.checkRouterEvent(routerEvent);

    })
  }

  private checkRouterEvent(routerEvent:Event):void{

    if(routerEvent instanceof NavigationStart){

      this.dataLoading=true;
    }
    if(routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
        ){

          this.dataLoading=false;
        }
  }
 

}
