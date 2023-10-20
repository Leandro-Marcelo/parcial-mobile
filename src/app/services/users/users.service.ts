import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export interface User {
  id: string
  username: string
  email: string
  profileImg: string | null
  mobileNumber:  string
  role: string
}

export class UsersService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private usersUpdated = new Subject<User[]>();
  public usersUpdated$ = this.usersUpdated.asObservable();

  private createdOrUpdateduser = new Subject<User>();
  public createdOrUpdateduser$ = this.createdOrUpdateduser.asObservable();

  constructor(private httpClient: User) { }

  // REDUX OR REDUCER DJAKSDJAKJ

  updateusersList(users: User[]) {
    this.usersUpdated.next(users);
  }

  getMessages(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`, this.httpOptions)
      .pipe(
        retry(2),
        map((users) => {
          return users.map((user) => {
            return { ...user, id: String(user.id), userId: String(user.userId) };
          });
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something went wrong. Please try again.');
  }
}
