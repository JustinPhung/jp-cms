import { Component, OnInit } from '@angular/core';
import {PersistenceService} from 'angular-persistence';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-jp-cms-login',
  templateUrl: './jp-cms-login.component.html',
  styleUrls: ['./jp-cms-login.component.css']
})
export class JpCmsLoginComponent implements OnInit {

  form = {
    username: '',
    password: ''
  }

  constructor( private db: AngularFireDatabase  ) {
  }

  ngOnInit() {
  }

  async submitForm() {
    this.db.object('JP_CMS_User').valueChanges().subscribe( user => {
      if (user['username'] === this.form.username &&
          user['password'] === this.form.password ) {
       console.log('JP_CMS_Password');
      }
    });
  }

}
