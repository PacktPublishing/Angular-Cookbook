import { InjectionToken } from '@angular/core';
import { User } from '../interfaces/user.interface';

export class Greeter implements User {
  firstName;
  lastName;
  constructor(user: User) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

}

export const GREETER = new InjectionToken('Greeter', {
  providedIn: 'root',
  factory: () => Greeter
});
