import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {RouterModule, Routes} from '@angular/router';
import {JpCmsModule} from './modules/jp-cms/jp-cms.module';
import {JpAuthGuardService} from './modules/jp-cms/auth/jp-auth-guard.service';
import { JpCmsRegisterComponent } from './modules/jp-cms/jp-cms-register/jp-cms-register.component';
import { JpCmsEditComponent } from './modules/jp-cms/jp-cms-edit/jp-cms-edit.component';

const ROUTES: Routes = [
  { path: '', component: Page1Component },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [JpAuthGuardService]
  },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    JpCmsRegisterComponent,
    JpCmsEditComponent
  ],
  imports: [
    JpCmsModule,
    BrowserModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
