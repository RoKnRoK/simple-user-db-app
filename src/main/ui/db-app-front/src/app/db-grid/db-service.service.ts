import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class DbServiceService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http
      .get(environment.appHost + '/userDB/user/list?page=1&size=30')
      .map(response => {
        return response.json();
      })
  }
}
