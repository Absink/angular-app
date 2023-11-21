import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-page-details-client',
  templateUrl: './page-details-client.component.html',
  styleUrls: ['./page-details-client.component.scss']
})
export class PageDetailsClientComponent implements OnInit {

  public client!: Client;
  public notFound: string = "Erreur, le client n'est pas récupérable !";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cs: ClientService) { }


  ngOnInit(): void {
    let idClient = this.route.snapshot.paramMap.get("id");
    this.cs.getById(Number(idClient)).subscribe(x => this.client = x);
  }

  public redirect(): void {
    this.router.navigateByUrl('clients');
  }

  public next(): void {
    // this.router.navigateByUrl(`clients/${Number(this.idClient)+1}`);
  }

}
