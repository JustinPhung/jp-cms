import { Component, OnInit } from '@angular/core';
import {PersistenceService, StorageType} from 'angular-persistence';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-jp-cms-register',
  templateUrl: './jp-cms-register.component.html',
  styleUrls: ['./jp-cms-register.component.css']
})
export class JpCmsRegisterComponent implements OnInit {

  passwordsMatch = true;

  form = {
    username: '',
    password: '',
    password2: ''
  };


  constructor( private db: AngularFireDatabase ) {
    this.db.object('JP_CMS_User').valueChanges().subscribe(
      user => {
        if (user !== null) {
          location.href = window.location.origin + '/login';
        }
    }
    );
  }

  ngOnInit() {
  }

  submitForm() {
    if (this.form.password !== this.form.password2) {
      this.passwordsMatch = false;
      return;
    }
    const itemRef = this.db.object('JP_CMS_User');
    itemRef.update({username: this.form.username, password: this.form.password});

    location.href = window.location.origin + '/login';

  }


}
