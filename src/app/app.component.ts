import { APP_PAGES } from './tabs/tabs.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {

  constructor() {}

  public appPages: any[] = APP_PAGES.filter(page => page.inSidemenu);

  ngOnInit(): void {
 
  }

  
}