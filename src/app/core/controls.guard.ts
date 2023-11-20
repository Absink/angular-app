import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlsGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
  
}
