import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
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
    let search = new URLSearchParams();
    search.set('email', email.toString());
    search.set('password', password.toString());
    

    return this.http
    .get('/ArtGallery/api/signin?email='+ email + '&password='+ password)
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }
  private handleError(error: Response){
    console.error('An error occurred**', error);
    return Observable.throw(error.statusText);
  }

}
