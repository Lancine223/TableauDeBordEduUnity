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
  
  private admin1 : Admin|undefined;
  public isAuth : boolean = false;
  constructor(private route:Router) { }

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  setAdminConnect(admin : Admin) {
    this.admin1 = admin;
    this.isAuth = true;
  }
  getAdminConnect():Admin |undefined { 
    return this.admin1;
  }
  deconnecter(){
    console.log("je suis dans deconnecter");

    this.admin1=null;
    this.isAuth = false;
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log("sortie deconnecter",localStorage.getItem("idAdministrateur"));

  }
  

}
