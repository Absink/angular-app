import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public open: boolean = true;
  title = 'app-demo';

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void {
    this.open = !this.open;
  }
}
