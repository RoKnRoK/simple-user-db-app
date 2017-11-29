import { Component, OnInit } from '@angular/core';
import { DbServiceService } from './db-service.service';
import { User } from 'shared/user.model';

@Component({
  selector: 'app-db-grid',
  templateUrl: './db-grid.component.html',
  styleUrls: ['./db-grid.component.css'],
  providers: [DbServiceService]
})
export class DbGridComponent implements OnInit {

  users: User[]

  constructor(private dbService: DbServiceService) { }

  ngOnInit() {
    this.dbService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
