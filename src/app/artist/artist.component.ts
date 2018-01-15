import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css', '../navbar/navbar.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  usr;
  paintings = [];

  ngOnInit() {
    this.userService.getArtistDetail().subscribe(
      result => {
        this.usr = result['usrs'];
        this.paintings = result['paintings'];
      },
      error => console.log("Error :: " + error)
    )    
  }

}
