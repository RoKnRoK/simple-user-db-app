import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './db-service.service';
import { User } from 'app/shared/user.model';
import { CreateUserDialog } from 'app/shared/dialogs/create-user-dialog/create-user-dialog.component';

import { MatDialog, MatDialogConfig} from '@angular/material';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-db-grid',
  templateUrl: './db-grid.component.html',
  styleUrls: ['./db-grid.component.css'],
  providers: [DbServiceService]
})
export class DbGridComponent implements OnInit {

  users: User[];
  selectedUser: User;
  selectedUserIndex: number = -1;


  constructor(private dbService: DbServiceService,
  public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.getUsers(1, 15)
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
        if (result) {
          this.dbService.putUser(result);
          if (this.selectedUserIndex) { this.selectedUser = result;}
        }
      });
  }
    onDeleteUser(selectedUser: User){
        this.dbService.deleteUser(selectedUser).subscribe();
    }

  setSelectedUserIndex(index: number) {
    this.selectedUserIndex = index;
    this.selectedUser = this.users[this.selectedUserIndex];
  }

    clearSelection(){
        this.selectedUserIndex = -1;
        this.selectedUser = undefined;
    }

    onPageClicked(pageEvent: PageEvent){
        this.dbService.getUsers(pageEvent.pageIndex+1, pageEvent.pageSize).subscribe(data => {
            this.users = data;
        });
    }
}
