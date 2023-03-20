import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  verify:boolean = false;
  users: User[] = [
    {
      username: '',
      email: 'bagaricc@gmail.com',
      password: '1234',
    },
  ];



  constructor() {}

  loginUser(email: string, password:string):boolean {


    this.users.map((u) => {
      if (u.email == email && u.password == password) {
        return this.verify = true;
      } else {
        return this.verify = false;
      }

    })
    return this.verify;
  }


  isLogged = (): boolean => (this.verify) ? true : false;
}
