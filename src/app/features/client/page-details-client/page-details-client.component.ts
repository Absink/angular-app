import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-page-details-client',
  templateUrl: './page-details-client.component.html',
  styleUrls: ['./page-details-client.component.scss']
})
export class PageDetailsClientComponent implements OnInit {

  public idClient!: string | null;
  public description: string = "Id du client introuvable";

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {

    let c1 = new Client(); c1.id = 1; c1.name = "Client 1";
    let c2 = new Client(); c2.id = 2; c2.name = "Client 2";
    this.idClient = this.route.snapshot.paramMap.get("id");
    switch(Number(this.idClient)) {
      case 1:
        this.description = `Client ID = ${c1.id} / Client Nom = ${c1.name}`;
        break;
      case 2:
        this.description = `Client ID = ${c2.id} / Client Nom = ${c2.name}`;
        break;
      default:
        this.description = "Id du client introuvable";
        break;
    }
  }

  public redirect(): void {
    this.router.navigateByUrl('clients');
  }

  public next(): void {
    // this.router.navigateByUrl(`clients/${Number(this.idClient)+1}`);
  }

}
