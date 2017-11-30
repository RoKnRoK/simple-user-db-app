import { Component, OnInit } from '@angular/core';

import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateUserDialog>) { }

  ngOnInit() {
  }

}
