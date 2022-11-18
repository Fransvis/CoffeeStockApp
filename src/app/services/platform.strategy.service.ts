
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformStrategyService {
  constructor(private platform: Platform) {}

  isMobile(): boolean {
    return (this.platform.is('android') || this.platform.is('ios') || this.platform.is('hybrid')) && !this.platform.is('mobileweb');
  }
}