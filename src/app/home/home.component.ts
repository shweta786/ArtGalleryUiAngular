import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'
import { paintingService } from '../painting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../navbar/navbar.component.css']
})
export class HomeComponent implements OnInit {

  public slide1src = "assets/images/Modern-Art-Banner.jpg";
  public slide2src = "assets/images/Fall Festival Email Header.png";
  public slide3src = "assets/images/banner1.jpg";

  constructor(private paintingService: paintingService) { }

  msg ;
  names = [];
  paintings = [];
  status ;
  
  ngOnInit() {}

  sort(criteria: String) {
    this.paintingService.sortPainting(criteria).subscribe(
      result => {
        this.msg = result['msg'];
        this.names = result['names'];
        this.paintings = result['paintings'];  
        this.status = result['status'];      
      },
      error => console.log("Error :: " + error)
    );
  }

 
}
