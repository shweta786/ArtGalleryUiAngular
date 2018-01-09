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

  constructor(private authSessiomService: AuthSessiomService, private router: Router) { }

  result={
    status:false
  };
  result1: JsonResponse[];

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
  showLoginForm(){
    this.dialogActive= true;
  }
  closeLoginForm(){
    this.dialogActive= false;
  }

  createFormControls() { 
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"),
      
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
      result => this.result['status'] = result['status'],
      error => console.log("Error :: " + error)
    );
    this.router.navigate(['/logout']);
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      this.authSessiomService.logIn(this.myform.value.email, this.myform.value.password).subscribe(
        result1 => {this.result1 = result1
          this.closeLoginForm();
          this.ifSession();
          
        },
        error => console.log("Error ## " + error)
      );
      this.myform.reset();
      // this.ngOnInit();
      // 
      // this.router.navigate(['/login']);
    }
  }

}
