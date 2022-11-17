import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatabaseService } from './services/database/database.service';
import { DetailService } from './services/database/detail.service';
import { SQLiteService } from './services/database/sqlite.service';
import { FlavourRepository } from './repositories/flavour.repository';
import { MigrationService } from './services/database/migrations.service';

import { InitializeAppService } from './services/database/initialize.app.service';
import { FlavourDefaultQueryRepository } from './repositories/flavour.default.query.repository';

export function initializeFactory(init: InitializeAppService) {
  return () => init.initializeApp();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
   ],
  providers: [
    SQLiteService,
    DetailService,
    DatabaseService,
    MigrationService,
    FlavourRepository,
    InitializeAppService,
    FlavourDefaultQueryRepository,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [InitializeAppService],
      multi: true
    },
    ],
  bootstrap: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
