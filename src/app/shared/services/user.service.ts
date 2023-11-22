import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pCollection!: Observable<User[]>;
  private url: string = environment.api;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(`${this.url}/users`).pipe(
      map(datas => datas.map(
        data => new User(data))));
  }


  // Getters / Setters
  get collection(): Observable<User[]> {
    return this.pCollection;
  }

  set collection(col: Observable<User[]>) {
    this.pCollection = col;
  }




  public login(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users?username=${user.username}&password=${user.password}`).pipe(
      map(datas => datas.map(
        data => new User(data))));
  }
}
