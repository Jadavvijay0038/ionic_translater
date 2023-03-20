import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as iso6391 from 'iso-639-1';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  URL: string = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
  langobj: any[] | undefined;
  languageOptions: { [key: string]: string } = {};

  constructor(private _http: HttpClient) { }

  getAllLanguage(): Observable<string[]> {
    return this._http.get<any[]>(`${this.URL}/languages`).pipe(
      map(response => (response as any).data.languages)
    );
  }

  getLanName(): { [key: string]: string } {
    return this.langobj?.reduce((obj, element) => {
      const name = iso6391.default.getName(element.language);
      obj[name] = element.language;
      return obj;
    }, {});
  }
}
