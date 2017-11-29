import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class DbServiceService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http
      .get(environment.appHost + '/userDB/user/list')
      .map(response => {
        return response.json();
      })
  }
}
