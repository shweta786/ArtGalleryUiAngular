import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import "rxjs/Rx";
import { JsonResponse } from './JsonResponse';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class paintingService {

  constructor(private http: Http) { }

  getAllPainting(): Observable<JsonResponse[]> {
    return this.http
    .get('/ArtGallery/api/allPainting')
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  addToCart(paint_id: String): Observable<JsonResponse> {
    return this.http
    .get('/ArtGallery/api/addCart?paint_id='+ paint_id)
    .map((response: Response) => {
      return <JsonResponse[]>response.json();
  })
    .catch(this.handleError);
  }

  sortPainting(criteria: String): Observable<JsonResponse> {
    return this.http
    .get('/ArtGallery/api/sortPaint?criteria='+ criteria)
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
