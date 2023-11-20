import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public open: boolean = true;
  // public userConnected: boolean = false;
  public description: string = "Non connecté";

  ngOnInit(): void {
    this.open = false;
    // localStorage.setItem('key1', 'Bonjour !');
    // localStorage.getItem('key1');
    // localStorage.clear();
    // localStorage.removeItem('key1');
  }

  public switch(): void {
    this.open = !this.open;
  }

  // public updateTitre(): void {
  //   this.description = "TEST !";
  // }

  public login(): void {
    // this.userConnected = !this.userConnected;
    if (localStorage.getItem('userConnected') != null) {
      this.description = "Bienvenue";
      localStorage.removeItem('userConnected');
    } else {
      this.description = "Non connecté";
      localStorage.setItem('userConnected', 'T');
    }

  }
}
