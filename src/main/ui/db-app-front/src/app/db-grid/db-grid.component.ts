import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './db-service.service';
import { User } from '../shared/user.model';
import { CreateUserDialog } from '../shared/dialogs/create-user-dialog/create-user-dialog.component';

import { MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-db-grid',
  templateUrl: './db-grid.component.html',
  styleUrls: ['./db-grid.component.css'],
  providers: [DbServiceService]
})
export class DbGridComponent implements OnInit {

  users: User[]

  config: MatDialogConfig = {
        disableClose: true,
        width: '250px',

    };

  constructor(private dbService: DbServiceService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  onAddUser() {
      this.dialog.open(CreateUserDialog, this.config)
  }

}
