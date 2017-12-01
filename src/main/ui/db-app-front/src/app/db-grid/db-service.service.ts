import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import { User } from 'app/shared/user.model'

@Injectable()
export class DbServiceService {

  constructor(private http: HttpClient) { }

  getUsers(){
  let users;
     return this.http.get<User[]>(environment.appHost + '/userDB/user/list?page=1&size=30');
  }

  addUser(user: User) {
    console.log(user);
    this.http.post(environment.appHost + '/userDB/user/add', user).subscribe();
  }
}

