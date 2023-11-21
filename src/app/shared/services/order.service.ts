import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection!: Observable<Order[]>;
  private url: string = environment.api;


  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.url}/orders`);
  }

  // Getters / Setters
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
}
