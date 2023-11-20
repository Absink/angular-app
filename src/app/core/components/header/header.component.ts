import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public title: string = "CRM";

  // constructor() {
  //   this.title = "CRM 3";
  // }


  // ngOnInit(): void {
  //   this.title = "CRM 2";
  // }

}
