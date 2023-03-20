import { AfterViewInit, Component } from '@angular/core';
import { ApiEndpointService } from '../provider/api-endpoint.service';
import * as iso6391 from 'iso-639-1';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  langobj: any;
  languageOptions:any = {}

  constructor(private _ApiService: ApiEndpointService) { }
  ngAfterViewInit(): void {
   this.languageOptions = this._ApiService.getLanName()
  }
  
}
