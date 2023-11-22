import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public open: boolean = true;
  public description: string = "Non connecté";

  ngOnInit(): void {
    this.open = true;

    // const subject = new Subject<number>();

    // subject.subscribe(number => console.log(1, number));
    // subject.subscribe(number => console.log(2, number));

    // subject.next(1);
    // subject.next(50);
    // subject.complete();


  }

  public get isConnected(): boolean {
    return localStorage.getItem('userConnected') != null;
  }

  public switch(): void {
    this.open = !this.open;
  }


  public login(): void {
    if (localStorage.getItem('userConnected') != null) {
      this.description = "Bienvenue";
      localStorage.removeItem('userConnected');
    } else {
      this.description = "Non connecté";
      localStorage.setItem('userConnected', 'T');
    }

  }
}
