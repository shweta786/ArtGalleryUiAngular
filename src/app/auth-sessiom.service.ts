import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";
import { JsonResponse } from './JsonResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthSessiomService {

  constructor(private http: Http) { }

  getSession(): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/ifSession')
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  logOut(): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/logout')
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  logIn(email: String, password: String): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/signin?email='+ email + '&password='+ password)
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  }).catch(this.handleError);
  }

  signUp(name: String, email: String, phone: String, password: String, type: String) {
    // console.log("dwhduw--"+ type);
    if(type.toString() == "true") {
      type = "1";
    } else {
      type = "0";
    }
    const usr = {
      name: name,
      email: email,
      password: password,
      contact: phone,
      type: type,
    } ;
    // console.log("dwhduw--"+ type);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/ArtGallery/api/save',usr, options ).map((response: Response) => {
      return <JsonResponse[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response){
    console.error('An error occurred**', error);
    return Observable.throw(error.statusText);
  }

}