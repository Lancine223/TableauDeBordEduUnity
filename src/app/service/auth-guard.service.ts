import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthentificationService } from './authentification.service';
import { Admin } from 'app/model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  [x: string]: any;
  adminconect: Admin;
  constructor(private authService: AuthentificationService,
    private router: Router){
      this.adminconect = JSON.parse(localStorage.getItem('enseignant'));

  }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  canActivate(
    route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(this.adminconect != null) {
        return true;
      }else{
        return this.router.navigate(['/login']);
      }
  }
}
