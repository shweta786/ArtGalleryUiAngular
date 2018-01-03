import { Component, OnInit } from '@angular/core';
import { AuthSessiomService } from '../auth-sessiom.service';
import { JsonResponse } from '../JsonResponse';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myform: FormGroup;

  constructor(private authSessiomService: AuthSessiomService, private router: Router) { }

  result: JsonResponse[];
  ngOnInit() {
    this.authSessiomService.getSession().subscribe(
      result => this.result = result,
      error => console.log("Error :: " + error)
    );

    this.myform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

  }

  logout() {
    this.authSessiomService.logOut().subscribe(
      result => this.result = result,
      error => console.log("Error :: " + error)
    );
     this.router.navigate(['/logout']);
  }

}
