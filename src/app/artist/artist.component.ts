import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { paintingService } from '../painting.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css', '../navbar/navbar.component.css', '../show-card/show-card.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private userService: UserServiceService, private paintingService: paintingService, private router: Router, private route: ActivatedRoute) { }

  usr;
  paintings = [];
  msg;
  message;

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.userService.getArtistDetail(+params['uid'])).subscribe(
      result => {
        this.usr = result['usr'];
        this.paintings = result['paintings'];
        this.msg = result['msg'];
        if(this.msg === "no") {
          this.router.navigate(['/']);
        }
      },
      error => console.log("Error :: " + error)
    )    
  }

  addCart(painting_id: number) {
    this.paintingService.addToCart(painting_id.toString()).subscribe(
      result => {
        this.message = result['message'];
        alert(this.message);
      },
      error => console.log("Error :: " + error)
    )
  }

}
