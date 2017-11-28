import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DbServiceService {

  constructor() { }

  getUsers(){
    return this.http
      .get('http://localhost:8080/user/list')
      .map(response => {
        response.json();
        return response.json();
      })
  }
}
