import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export interface Room {
  id: string
  name: string
}

export class RoomsService {

  private baseUrl: string = 'http://localhost:4002';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private RoomsUpdated = new Subject<Room[]>();
  public RoomsUpdated$ = this.RoomsUpdated.asObservable();

  private createdOrUpdatedRoom = new Subject<Room>();
  public createdOrUpdatedRoom$ = this.createdOrUpdatedRoom.asObservable();

  constructor(private httpClient: Room) { }

  // REDUX OR REDUCER DJAKSDJAKJ

  updateRoomsList(Rooms: Room[]) {
    this.RoomsUpdated.next(Rooms);
  }

  createConnectionRealTime(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.baseUrl}/Rooms`, this.httpOptions)
      .pipe(
        retry(2),
        map((Rooms) => {
          return Rooms.map((Room) => {
            return { ...Room, id: String(Room.id), RoomId: String(Room.RoomId) };
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
