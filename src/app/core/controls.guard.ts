import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlsGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('userConnected'))
      return true;
    this.router.navigateByUrl('home');
    return false;
  }
  
}
