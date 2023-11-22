import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';
import { StateClient } from '../enums/state-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection!: Observable<Client[]>;
  private url: string = environment.api;


  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}/clients`).pipe(
      map(datas => datas.map(
        data => new Client(data))));
  }

  // Getters / Setters
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }




  // Requêtes
  public getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/clients/${id}`).pipe(
      map(x => new Client(x)));
  }

  public getBySate(state: StateClient): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}/clients?state=${state}`).pipe(
      map(datas => datas.map(
        data => new Client(data))));
  }

  public add(c: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/clients`, c).pipe(
      map(obj => new Client(obj)));
  }

  public update(c: Client, id: number): Observable<Client> {
    return this.http.put<Client>(`${this.url}/clients/${id}`, c).pipe(
      map(obj => new Client(obj)));
  }
}
