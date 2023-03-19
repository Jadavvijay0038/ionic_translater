import { AfterViewInit, Component } from '@angular/core';
import { ApiEndpointService } from '../provider/api-endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  langobj: any;

  constructor(private _ApiService: ApiEndpointService) { }
  ngAfterViewInit(): void {
    this._ApiService.getAllLanguage().subscribe(Response=>{
      this.langobj = Response;
    })
  }
}
