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

  private handleError(error: Response){
    console.error('An error occurred------------- ', error);
    return Observable.throw(error.statusText);
  }

}
