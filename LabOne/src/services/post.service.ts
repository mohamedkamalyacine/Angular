import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/shared_classes_and_types/shared.classes';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  _url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPostsApi():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(
      catchError((err)=>
      {
        return throwError(() => err.message||"Server Error");
      })
    );
  }
}
