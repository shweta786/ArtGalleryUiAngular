import { Component, OnInit } from '@angular/core';
import { AuthSessiomService } from '../auth-sessiom.service';
import { JsonResponse } from '../JsonResponse';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myform: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private authSessiomService: AuthSessiomService, private router: Router) { }

  result: JsonResponse[];
  ngOnInit() {
    this.authSessiomService.getSession().subscribe(
      result => this.result = result,
      error => console.log("Error :: " + error)
    );

    this.createFormControls();
    this.createForm();

  }

  // this.myform = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required
  //   ]),
  // });

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() { 
    this.myform = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  logout() {
    this.authSessiomService.logOut().subscribe(
      result => this.result = result,
      error => console.log("Error :: " + error)
    );
    this.router.navigate(['/logout']);
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.myform.reset();
    }
  }

}
