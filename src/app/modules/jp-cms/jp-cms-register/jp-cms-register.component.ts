import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../db/database.service';

@Component({
  selector: 'app-jp-cms-register',
  templateUrl: './jp-cms-register.component.html',
  styleUrls: ['./jp-cms-register.component.css']
})
export class JpCmsRegisterComponent implements OnInit {

  form = {
    username: '',
    password: '',
    password2: ''
  };


  constructor(private db: DatabaseService) { }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.db.getUserTabe());
  }

}
