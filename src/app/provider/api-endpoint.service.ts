import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {
  URL: String = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

  constructor(private _http: HttpClient) { }

  getAllLanguage(): Observable<any> {
    return this._http.get<any[]>(this.URL + "/languages").pipe(
      map(response => (response as any).data.languages)
    );;
  }
}
