import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.css', '../navbar/navbar.component.css']
})
export class IndexLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public slide1src = "assets/images/Modern-Art-Banner.jpg";
  public slide2src = "assets/images/Fall Festival Email Header.png";
  public slide3src = "assets/images/banner1.jpg";

}
