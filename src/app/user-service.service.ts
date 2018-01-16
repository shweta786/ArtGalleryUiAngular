import { Injectable } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { JsonResponse } from './JsonResponse';

@Injectable()
export class UserServiceService {

  constructor(private http: Http) { }

  getAllArtists(): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/allArtist')
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  getArtistDetail(uid: Number): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/artist?uid='+ uid)
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  getCart(): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/myCart')
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  private handleError(error: Response){
    console.error('An error occurred------------- ', error);
    return Observable.throw(error.statusText);
  }

}
