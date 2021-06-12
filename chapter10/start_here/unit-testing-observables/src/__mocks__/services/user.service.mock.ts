import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { IUser } from 'src/app/core/interfaces/user.interface';

export const DUMMY_USERS: IUser[] = [
  {
    name: {
      title: 'Mr',
      first: 'Irineu',
      last: 'da Rocha',
    },
    email: 'irineu.darocha@example.com',
    login: {
      uuid: '85dc5ab4-ecc2-4009-9b65-89d117711d7c',
    },
    phone: '(04) 4008-4776',
    cell: '(56) 9168-6321',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/9.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/9.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/9.jpg',
    },
  },
  {
    name: {
      title: 'Mrs',
      first: 'Indie',
      last: 'Hall',
    },
    email: 'indie.hall@example.com',
    login: {
      uuid: 'd2775083-57a8-4034-983b-844cbd58aba1',
    },
    phone: '(378)-918-2714',
    cell: '(028)-315-1569',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/62.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/62.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/62.jpg',
    },
  },
];

export class UserServiceMock {
  searchUsers(username): Observable<IUser[]> {
    return this.getSimilarUsers(null).pipe(
      map((users) => {
        if (!username) {
          return users;
        }
        return users.filter((user) => {
          const query = username.toLowerCase();
          return (
            user.email.toLowerCase().includes(query) ||
            user.name.first.toLowerCase().includes(query) ||
            user.name.last.toLowerCase().includes(query)
          );
        });
      })
    );
  }

  getUser(userId): Observable<IUser> {
    return this.getSimilarUsers().pipe(
      map((users) =>
        users.find((user) => {
          return user.login.uuid === userId;
        })
      )
    );
  }

  getSimilarUsers(userId = null): Observable<IUser[]> {
    return of(DUMMY_USERS).pipe(
      map((users) => users.filter((user) => user.login.uuid !== userId))
    );
  }
}
