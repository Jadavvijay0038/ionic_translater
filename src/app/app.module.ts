import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiEndpointService } from './provider/api-endpoint.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptServiceInterceptor } from './intercept-service.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptServiceInterceptor,
      multi:true
    },ApiEndpointService],
  bootstrap: [AppComponent],
})
export class AppModule {}
