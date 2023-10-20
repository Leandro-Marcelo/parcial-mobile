import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export interface ChatMessageEventDto {
  id: string;
  userId: string;
  content: string;
  roomId: string;
  createdAt: number;
}

export class MessagesService {

  private baseUrl: string = 'http://localhost:4003';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private postsUpdated = new Subject<ChatMessageEventDto[]>();
  public postsUpdated$ = this.postsUpdated.asObservable();

  private createdOrUpdatedPost = new Subject<ChatMessageEventDto>();
  public createdOrUpdatedPost$ = this.createdOrUpdatedPost.asObservable();

  constructor(private httpClient: ChatMessageEventDto) { }

  // REDUX OR REDUCER DJAKSDJAKJ

  updatePostsList(posts: ChatMessageEventDto[]) {
    this.postsUpdated.next(posts);
  }

  getMessages(): Observable<ChatMessageEventDto[]> {
    return this.httpClient.get<ChatMessageEventDto[]>(`${this.baseUrl}/posts`, this.httpOptions)
      .pipe(
        retry(2),
        map((posts) => {
          return posts.map((post) => {
            return { ...post, id: String(post.id), userId: String(post.userId) };
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
