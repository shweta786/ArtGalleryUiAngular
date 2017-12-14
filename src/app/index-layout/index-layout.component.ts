import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.css']
})
export class IndexLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public slide1src = "assets/images/Modern-Art-Banner.jpg";
  public slide2src = "assets/images/Fall Festival Email Header.png";
  public slide3src = "assets/images/banner1.jpg";

}
