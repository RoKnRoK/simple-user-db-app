import { Component, OnInit } from '@angular/core';
import {DbServiceService} from './db-service.service';

@Component({
  selector: 'app-db-grid',
  templateUrl: './db-grid.component.html',
  styleUrls: ['./db-grid.component.css']
})
export class DbGridComponent implements OnInit {

  constructor(private dbService: DbServiceService) { }

  ngOnInit() {
    this.dbService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

}
