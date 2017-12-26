import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../navbar/navbar.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public slide1src = "assets/images/Modern-Art-Banner.jpg";
  public slide2src = "assets/images/Fall Festival Email Header.png";
  public slide3src = "assets/images/banner1.jpg";

}
