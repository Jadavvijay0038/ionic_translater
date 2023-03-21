import { AfterViewInit, Component } from '@angular/core';
import { ApiEndpointService } from '../provider/api-endpoint.service';
import * as iso6391 from 'iso-639-1';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  tolang: string = 'hi';
  langobj: any;
  languageOptions: any = {}
  fromLang: string = 'en';

  constructor(private _ApiService: ApiEndpointService) { }
  ngAfterViewInit(): void {
    this.languageOptions = this._ApiService.getAllLanguage().subscribe(Response => {
      this.langobj = Response;
      this.preparelanlist();
    })
  }
  preparelanlist() {
    this.languageOptions = this.langobj?.reduce((obj: { [x: string]: any; }, element: { language: string; }) => {
      const name = iso6391.default.getName(element.language);
      name ? obj[name] = element.language : '';
      return obj;
    }, {});
  }
  selectedlang() {
    console.log(this.fromLang)
    console.log(this.tolang)

  }
}
