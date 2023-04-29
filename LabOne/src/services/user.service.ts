import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/shared_classes_and_types/shared.classes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url:string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUsersApi():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(
      catchError((err)=>
      {
        return throwError(() => err.message||"Server Error");
      })
    );
    /*
    1- HTTP GET Request from User Service:
       - import { HttpClientModule } from '@angular/common/http'; in app.module.ts
       - add (HttpClientModule) to the imports Array

    2- import { HttpClient} from '@angular/common/http'; in the service file and inject http client in the constructor
    3- Use GET operation.
    */
  }
}
