import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import { User } from 'app/shared/user.model'

@Injectable()
export class DbServiceService {

  constructor(private http: HttpClient) { }

  getUsers(page: number, size: number){
     return this.http.get<User[]>(environment.appHost + '/userDB/users?page='+page+'&size='+size);
  }

  putUser(user: User) {
    this.http.put(environment.appHost + '/userDB/users', user).subscribe();
  }

  deleteUser(user: User){
    return this.http.delete(environment.appHost + '/userDB/users/'+ user.id);
  }
}

