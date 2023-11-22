import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-page-add-order-bis',
  templateUrl: './page-add-order-bis.component.html',
  styleUrls: ['./page-add-order-bis.component.scss']
})
export class PageAddOrderBisComponent implements OnInit {

  public order = new Order();

  public states = Object.values(StateOrder);
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private os: OrderService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.order.typePresta, Validators.required],
      client: [this.order.client, Validators.compose([Validators.required, Validators.minLength(5)])],
      nbJours: [this.order.nbJours],
      tjmHT: [this.order.tjmHT],
      tva: [this.order.tva],
      state: [this.order.state],
      comment: [this.order.comment],
    });
  }

  public save(): void {
    this.os.add(this.form.value).subscribe(x => console.log(x));
  }

}
