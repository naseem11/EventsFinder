import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
 showMenu = false;

  constructor() { }

  toggleMenu() {

    this.showMenu = !this.showMenu;
  }


}
