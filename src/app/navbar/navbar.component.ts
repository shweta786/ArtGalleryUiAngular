import { Component, OnInit, Input } from '@angular/core';
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
  @Input() email1: String;
  @Input() password1: String;

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

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}")
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
      // console.log("wjgduiwgdigwi-------"+ this.myform.get('email').value)
      console.log(this.email1)
      // this.authSessiomService.logIn(this.myform.value.email, this.myform.value.password).subscribe(
      //   result => this.result = result,
      //   error => console.log("Error ## " + error)
      // );
    }
  }

}
