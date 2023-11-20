import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public title: string | undefined;

  ngOnInit(): void {
    this.title = "Page de listing des clients !";
  }



}