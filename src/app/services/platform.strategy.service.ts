
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformStrategyService {
  constructor(private platform: Platform) {
    console.log('Platform :: :: :: :: :: :: :: ::');
    console.log('android: ', this.platform.is('android'));
    console.log('ios: ', this.platform.is('ios'));
    console.log('hybrid: ', this.platform.is('hybrid'));
    console.log('mobileweb: ', this.platform.is('mobileweb'));
    console.log(':: :: :: :: :: :: :: :: Platform');
  }

  isMobile(): boolean {
    return (this.platform.is('android') || this.platform.is('ios') || this.platform.is('hybrid')) && !this.platform.is('mobileweb');
  }
}