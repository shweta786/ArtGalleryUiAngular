import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '../JsonResponse';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-artist',
  templateUrl: './all-artist.component.html',
  styleUrls: ['./all-artist.component.css', '../navbar/navbar.component.css', '../show-card/show-card.component.css']
})
export class AllArtistComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  usrs = [];

  public slide1src = "assets/images/Modern-Art-Banner.jpg";
  public slide2src = "assets/images/Fall Festival Email Header.png";
  public slide3src = "assets/images/banner1.jpg";

  ngOnInit() {

    this.userService.getAllArtists().subscribe(
      result => {
        this.usrs = result['usrs'];
      },
      error => console.log("Error :: " + error)
    )    
    
  }

 
}
