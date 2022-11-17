
import { Injectable } from '@angular/core';
import { Flavours } from '../models/Flavours';
import productsData from './flavour-data-example';
import { DatabaseService } from '../services/database/database.service';
import { DBSQLiteValues, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Users } from '../models/users';

@Injectable()
export class FlavourRepository {
  constructor(private _databaseService: DatabaseService) {
  }

  async getFlavours(): Promise<Flavours[]> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      var flavours: DBSQLiteValues = await db.query("select * from flavours ORDER BY name ASC");
      return flavours.values as Flavours[];
    });
  }

  async createFlavour(flavour) {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlcmd: string = "insert into flavours (name, barcode, PricePerBox, PricePerPod, PodsPerBox, PhotoName) values (?, ?, ?, ?, ?, ?)";
      let values: Array<any> = [flavour.name, flavour.Barcode, flavour.PricePerBox, flavour.PricePerPod, flavour.PodsPerBox, flavour.PhotoName];
      console.log(values)
      let ret: any = await db.run(sqlcmd, values);
      if (ret.changes.lastId > 0) {
        return ret.changes as Flavours;
      }
      throw Error('create flavours failed');
    });
  }

  async updateFlavour(flavour) {
    console.log(flavour)
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlcmd: string = "update flavours set name = ?, Barcode = ?, PricePerBox = ?, PricePerPod = ?, PodsPerBox = ?, PhotoName = ? where id = ?";
      let values: Array<any> = [flavour.name, flavour.Barcode, flavour.PricePerBox, flavour.PricePerPod, flavour.PodsPerBox, flavour.PhotoName, flavour.ID];
      let ret: any = await db.run(sqlcmd, values);
      if (ret.changes.changes > 0) {
        return await this.getFavourById(flavour.ID);
      }
      throw Error('update flavour failed');
    });
  }

  async getFavourById(id: number): Promise<Flavours> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      let sqlcmd: string = "select * from flavours where id = ? limit 1";
      let values: Array<any> = [id];
      let ret: any = await db.query(sqlcmd, values);
      if (ret.values.length > 0) {
        return ret.values[0] as Flavours;
      }
      throw Error('get flavour by id failed');
    });
  }

  async deleteFlavourById(id: number): Promise<void> {
    return this._databaseService.executeQuery<any>(async (db: SQLiteDBConnection) => {
      await db.query(`delete from flavours where id = ${id};`);
    });
  }
 
}
