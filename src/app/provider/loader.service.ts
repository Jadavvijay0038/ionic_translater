import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>()
  constructor(private loadingController: LoadingController) { }

  async show() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      spinner: 'circles',
    });

    loading.present();
  }

  hide() {
    this.loadingController.dismiss();
  }
}
