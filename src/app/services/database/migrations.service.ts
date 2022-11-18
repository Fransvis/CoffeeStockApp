import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { DatabaseService } from './database.service';
import { environment } from 'src/environments/environment';
import { FlavourRepository } from 'src/app/repositories/flavour.repository';

export const createSchemaFlavours: string = `
CREATE TABLE IF NOT EXISTS flavours (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  Barcode TEXT DEFAULT '',
  PricePerBox NUMBER NOT NULL,
  PricePerPod NUMBER NOT NULL,
  PodsPerBox NUMBER NOT NULL,
  PhotoName TEXT DEFAULT ''
  );
`;

export const dropchemaFlavours: string = `
DROP TABLE IF EXISTS flavours 
`;


export const createSchemaTest: string = `
CREATE TABLE IF NOT EXISTS test (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);
`;

@Injectable()
export class MigrationService {

  constructor(private sqliteService: SQLiteService, 
    private databaseService: DatabaseService,
    private DatabaseQuery: FlavourRepository) {
  }

  async migrate(): Promise<any> {
    await this.createTestTable();
    await this.createFlavoursTable();
    await this.checkDataEntries()
    // this.dropFlavoursTable()
  }

  async createFlavoursTable(): Promise<any> {
    // console.log('creating flavours table')
    await this.databaseService.executeQuery(async (db) => {
      await db.execute(createSchemaFlavours);
    });
  }

  checkDataEntries(){
    this.DatabaseQuery.getFlavours().then(res => {
      if (res.length == 0) {
        this.seedDatabase()
      }
    })
  }

  seedDatabase(){
    let flavour = {
      name: "Ristretto",
      Barcode: "1232132321312",
      PricePerBox: 250,
      PricePerPod: 18 ,
      PodsPerBox: 12,
      PhotoName: "../../../assets/img/risetto.png"
    }

    this.DatabaseQuery.createFlavour(flavour)
  }

  async dropFlavoursTable(): Promise<any> {
    // console.log('dropping flavours table')
    await this.databaseService.executeQuery(async (db) => {
    await db.execute(dropchemaFlavours);
    });
  }

  async createTestTable(): Promise<void> {
    // console.log(`going to create a connection`)
    const db = await this.sqliteService.createConnection(environment.databaseName, false, "no-encryption", 1);
    await db.open();
    let query = `
            CREATE TABLE IF NOT EXISTS test (
              id INTEGER PRIMARY KEY NOT NULL,
              name TEXT NOT NULL
            );
            `
    const res: any = await db.execute(query);
    await this.sqliteService.closeConnection(environment.databaseName);
  }
}
