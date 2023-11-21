import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  id!: number;
  tjmHT: number = 500;
  nbJours: number = 1;
  tva: number = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  date!: Date;

  totalHT(): number {
    return this.tjmHT * this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva/100);
  }

  constructor(obj?: Partial<Order>) {
    if (obj)
      Object.assign(this, obj);
  }
}
