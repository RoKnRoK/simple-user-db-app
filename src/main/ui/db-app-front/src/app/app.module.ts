import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DbGridComponent } from './db-grid/db-grid.component';

import { AlertModule } from 'ngx-bootstrap';
import { CreateUserDialog } from './shared/dialogs/create-user-dialog/create-user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DbGridComponent,
    CreateUserDialog
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
      CreateUserDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
