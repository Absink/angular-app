import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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
  public bntAdd: BtnI = { label: 'Add', route: 'add'};
  public headers: string[] = ['ID', 'Nom', 'CA', 'Etat'];
  public btnFiltre: BtnI = { label: 'Filtre', action: true};
  public state: StateClient | undefined;

  constructor(private cs: ClientService) { }

  ngOnInit(): void {
    this.title = "Liste des clients";
    this.cs.collection.subscribe(datas => this.clients = datas);
  }

  public getClients(): Client[] {
    if (!this.state)
      return this.clients;
    return this.clients.filter(x => x.state == this.state);
  }

  public updateState(): void {
    switch(this.state) {
      case StateClient.Active:
        this.state = StateClient.Inactive;
        break;
      case StateClient.Inactive:
        this.state = undefined;
        break;
      default:
        this.state = StateClient.Active;
        break;
    }
  }
}
