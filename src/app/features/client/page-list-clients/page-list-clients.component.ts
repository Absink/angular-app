import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public title: string | undefined;
  public clients: Client[] = [];

  constructor(private cs: ClientService) { }

  ngOnInit(): void {
    this.title = "Page de listing des clients !";
    this.cs.collection.subscribe(datas => this.clients = datas);
  }
}
