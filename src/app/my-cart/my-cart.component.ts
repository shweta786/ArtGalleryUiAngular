import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css','../navbar/navbar.component.css','../show-card/show-card.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router) { }

  orders = [];
  paintings = [];
  names = [];
  msg = "";

  ngOnInit() {

    this.userService.getCart().subscribe(
      result => {
        this.msg = result['msg'];
        this.orders = result['orders'];
        this.paintings = result['paintings'];
        this.names = result['names'];
        if(this.msg === "no") {
          this.router.navigate(['/']);
        } else {
          if(this.paintings.length <= 0)
            this.msg = "empty";
        }
      },
      error => console.log("Error :: " + error)
    )    
   
  }

}
