import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  users: User[] = [
    {
      username: '',
      email: 'bagaricc@gmail.com',
      password: '1234',
    },
  ];

  verify:boolean =false;

  constructor() {}

  loginUser(email: string, password:string):boolean {

   let verify :boolean =false;;
    this.users.map((u) => {
      if (u.email == email && u.password == password) {
        return verify = true;
      } else {
        return verify = false;
      }

    })
    return verify;
  }
}
