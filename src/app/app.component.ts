import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public open: boolean = true;
  public userConnected: boolean = false;
  public description: string = "Non connecté";

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void {
    this.open = !this.open;
  }

  // public updateTitre(): void {
  //   this.description = "TEST !";
  // }

  public login(): void {
    this.userConnected = !this.userConnected;
    if (this.userConnected == true)
      this.description = "Bienvenue";
    else
      this.description = "Non connecté";
  }
}
