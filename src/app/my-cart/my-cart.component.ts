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
  c = 0;
  total = 0;

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
          else {
            for(let i=0; i<this.paintings.length; i++) {
              this.c = this.c + 1;
              this.total = this.total + Number(this.paintings[i].price);
            }
          }
        }
      },
      error => console.log("Error :: " + error)
    );   
   
  }

  removeFromCart(pid: number) {
    this.userService.removeCart(pid).subscribe(
      result => {
        this.msg = result['message'];
        if(this.msg === "ok") {
          alert("successfully removed from cart");
          window.location.reload();
        } else {
          alert("error occured");
          this.router.navigate(['/']);
        }
      },
      error => console.log("Error :: " + error)
    );
  }

}
