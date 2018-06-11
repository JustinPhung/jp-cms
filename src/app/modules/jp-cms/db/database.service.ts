import {Injectable} from '@angular/core';
const Sqlite = require('nativescript-sqlite');

@Injectable()
export class DatabaseService {

  constructor( private userTable: any ) {
    (new Sqlite('jp_cms.db')).then(db => {
      db.execSQL('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)').then(id => {
        this.userTable = db;
      }, error => {
        console.log('CREATE TABLE ERROR', error);
      });
    }, error => {
      console.log('OPEN DB ERROR', error);
    });

    this.insert();

  }

  public insert() {
    this.userTable.execSQL('INSERT INTO user (username, password) VALUES (?, ?)', ['Nic', 'Raboy']).then(id => {
      console.log('INSERT RESULT', id);
    }, error => {
      console.log('INSERT ERROR', error);
    });
  }

  public getUserTabe() {
    return this.userTable;
  }
}
