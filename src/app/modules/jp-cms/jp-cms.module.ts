import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JpCmsLoginComponent} from './jp-cms-login/jp-cms-login.component';
import {JpAuthGuardService} from './auth/jp-auth-guard.service';
import {JpAuthService} from './auth/jp-auth.service';
import {RouterModule, Routes} from '@angular/router';
import {JpCmsRegisterComponent} from './jp-cms-register/jp-cms-register.component';
import {JpCmsEditComponent} from './jp-cms-edit/jp-cms-edit.component';

const ROUTES: Routes = [
  { path: 'register', component: JpCmsRegisterComponent },
  { path: 'login', component: JpCmsLoginComponent },
  { path: 'edit', component: JpCmsEditComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      ROUTES
    )
  ],
  declarations: [ JpCmsLoginComponent ],
  providers:    [ JpAuthService, JpAuthGuardService ],
  exports: [
    JpCmsLoginComponent ]
})
export class JpCmsModule { }
