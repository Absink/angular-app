import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

  public user: User = new User();

  constructor(private us: UserService, private router: Router) {}

  public login(): void {
    this.us.login(this.user).subscribe(u => {
      console.log(u);
      if (u[0] && u[0].id) {
        localStorage.setItem('userConnected', u[0].username);
        this.router.navigateByUrl('home');
      } else {
        this.user = new User();
      }
    })
  }

}
