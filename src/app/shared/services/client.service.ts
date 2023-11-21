import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection!: Observable<Client[]>;
  private url: string = environment.api;


  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}/clients`);
  }

  // Getters / Setters
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
}
