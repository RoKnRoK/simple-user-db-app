import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { User } from 'app/shared/user.model';


@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateUserDialog>,
  @Inject(MAT_DIALOG_DATA) public user: any) {
    console.log(user);
  }

  private userForm: FormGroup;
  private editMode: boolean;

  ngOnInit() {
    this.editMode = (this.user !== undefined) && (this.user !== {});

    let name = '';
    let password = '';

    if (this.editMode) {
      name =  this.user.name;
      password = this.user.password;
    }
    this.userForm = new FormGroup({
        'name': new FormControl(name, Validators.required),
        'password': new FormControl(password, Validators.required),
    });
  }
  onAddUser(){
    this.dialogRef.close({
      name: this.userForm.value.name,
      password: this.userForm.value.password,
      id: this.user.id
    });
  }
}
