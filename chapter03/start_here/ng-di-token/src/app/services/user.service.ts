import { Injectable } from '@angular/core';
import { Greeter } from '../classes/greeter.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [{
    firstName: 'Muhammad Ahsan',
    lastName: 'Ayaz'
  }, {
    firstName: 'John',
    lastName: 'Wick'
  }, {
    firstName: 'Clark',
    lastName: 'Kent'
  }, {
    firstName: 'Peter',
    lastName: 'Parker'
  }]
  constructor() { }

  getUser() {
    const user = this.users[Math.floor(Math.random() * this.users.length)]
    return new Greeter(user);
  }
}
