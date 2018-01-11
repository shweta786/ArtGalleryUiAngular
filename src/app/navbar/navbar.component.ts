import { Component, OnInit, Input  } from '@angular/core';
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
  dialogActive : boolean;

  myform2: FormGroup;
  name: FormControl;
  email2: FormControl;
  password2: FormControl;
  phone: FormControl;
  artist: FormControl;
  dialogActive2 : boolean;

  constructor(private authSessiomService: AuthSessiomService, private router: Router) { }

  result={
    status:false
  };
  result1: JsonResponse[];
  result2: JsonResponse[];

  ngOnInit() {
    this.ifSession();
    this.createFormControls();
    this.createForm();
  }


  ifSession() {
    this.authSessiomService.getSession().subscribe(
      result => this.result['status'] = result['status'],
      error => console.log("Error :: " + error)
    );
  }

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"),
      
    ]);

    this.password = new FormControl('', [
      Validators.required
    ]);

    this.email2 = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"),
      
    ]);

    this.password2 = new FormControl('', [
      Validators.required
    ]);

    this.name =  new FormControl('', [
      Validators.required,      
    ]);

    this.phone = new FormControl('', [
      Validators.pattern("[0-9]{10}"),
    ]);

    this.artist = new FormControl('', [
    ]);

  }

  createForm() { 
    this.myform = new FormGroup({
      email: this.email,
      password: this.password
    });

    this.myform2 = new FormGroup({
      name: this.name,      
      email2: this.email2,
      phone: this.phone,      
      password2: this.password2,
      artist: this.artist,
    });
  }

  showLoginForm(){
    this.dialogActive= true;
  }
  closeLoginForm(){
    this.dialogActive= false;
    this.myform.reset();
  }
  showSignUpForm(){
    this.dialogActive2= true;
  }
  closeSignUpForm(){
    this.dialogActive2= false;
    this.myform2.reset();
  }

  logout() {
    this.authSessiomService.logOut().subscribe(
      result => this.result['status'] = result['status'],
      error => console.log("Error :: " + error)
    );
    this.router.navigate(['/logout']);
  }

  onSubmit() {
    if (this.myform.valid) {
      this.authSessiomService.logIn(this.myform.value.email, this.myform.value.password).subscribe(
        result1 => {
          this.result1 = result1
          this.ifSession();
          if(this.result1["message"] !== null && this.result1["usr"] === null) {
            alert(JSON.stringify(this.result1["message"]));
          } else {
            alert(JSON.stringify(this.result1["status"]));
          }
        },
        error => console.log("Error ## " + error)
      );
    }
    this.myform.reset();
    this.closeLoginForm();    
    // this.router.navigate(['/']);
  }

  onSubmit2() {

    if (this.myform2.valid) {
      this.authSessiomService.signUp(
        this.myform2.value.name,
        this.myform2.value.email2,
        this.myform2.value.phone,
        this.myform2.value.password2,
        this.myform2.value.artist).subscribe(
          result2 => {
            this.result2 = result2;
            this.ifSession();
            if(this.result2["message"] !== "user" && this.result2["message"] !== "artist"){
              alert(JSON.stringify(this.result2["message"]));
            } else {
              alert(JSON.stringify(this.result2["status"]));
            }
          },
          error => console.log("Error @@ "+ error)
        );
    }
    this.myform2.reset();
    this.closeSignUpForm();
    // this.router.navigate(['/']);
    
  }


}
