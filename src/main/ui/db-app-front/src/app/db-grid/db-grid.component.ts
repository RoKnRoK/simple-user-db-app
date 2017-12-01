import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './db-service.service';
import { User } from 'app/shared/user.model';
import { CreateUserDialog } from 'app/shared/dialogs/create-user-dialog/create-user-dialog.component';

import { MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-db-grid',
  templateUrl: './db-grid.component.html',
  styleUrls: ['./db-grid.component.css'],
  providers: [DbServiceService]
})
export class DbGridComponent implements OnInit {

  users: User[];
  selectedUser: User


  constructor(private dbService: DbServiceService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  }

  onAddUser() {
      let dialogRef = this.dialog.open(CreateUserDialog, {
           disableClose: true,
           width: '250px',
           data: this.selectedUser
       });
      dialogRef.afterClosed().subscribe(result => {
        if (result) { this.dbService.addUser(result); }
      });
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
  }

}
