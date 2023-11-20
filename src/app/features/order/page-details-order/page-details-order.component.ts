import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details-order',
  templateUrl: './page-details-order.component.html',
  styleUrls: ['./page-details-order.component.scss']
})
export class PageDetailsOrderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {
    // var 
    const id: string | null = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.router.navigateByUrl('/home');
  }



}
