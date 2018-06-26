import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
 showMenu = false;

  constructor(private router:Router) { }

  toggleMenu() {

    this.showMenu = !this.showMenu;
  }


  isActive(url:string):boolean{

    return this.router.url.includes(url);
  }
}
