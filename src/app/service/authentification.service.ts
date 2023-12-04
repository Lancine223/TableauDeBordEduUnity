import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'app/model/admin';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  public isAuth : boolean = false;
  constructor(private route:Router) { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  
 
  deconnecter(){
    // this.isAuth = false;
    localStorage.clear();
    this.route.navigate(['/login']);
  }
  

}
