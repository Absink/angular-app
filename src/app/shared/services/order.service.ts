import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection!: Observable<Order[]>;
  private url: string = environment.api;


  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Order[]>(`${this.url}/orders`);
    this.collection = this.http.get<Order[]>(`${this.url}/orders`).pipe(
      map(datas => datas.map(
        data => new Order(data))));
  }

  // Getters / Setters
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }






  // Requêtes
  public getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}/order/${id}`).pipe(
      map(obj => new Order(obj)));
  }

  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.url}/orders`, order).pipe(
      map(obj => new Order(obj)));
  }




}
