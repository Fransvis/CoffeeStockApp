

import { Injectable } from '@angular/core';
import { Flavours } from '../models/Flavours';
import { environment } from 'src/environments/environment';
import { DBSQLiteValues } from '@capacitor-community/sqlite';
import { SQLiteService } from '../services/database/sqlite.service';

@Injectable()
export class FlavourDefaultQueryRepository {
  constructor(private sqliteService: SQLiteService) {
  }

  async getFlavours(): Promise<Flavours[]> {
    const db = await this.sqliteService.createConnection(environment.databaseName, false, "no-encryption", 1);
    await db.open();
    var flavours: DBSQLiteValues = await db.query("select * from flavours");
    await this.sqliteService.closeConnection(environment.databaseName);
    return flavours.values as Flavours[];
  }

}
