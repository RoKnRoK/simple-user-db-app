import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DbGridComponent } from './db-grid/db-grid.component';

import { AlertModule } from 'ngx-bootstrap';
import { CreateUserDialog } from './shared/dialogs/create-user-dialog/create-user-dialog.component';
import { PaginatorComponent } from './db-grid/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    DbGridComponent,
    CreateUserDialog,
    PaginatorComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
      CreateUserDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
