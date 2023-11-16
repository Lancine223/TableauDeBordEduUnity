import { Injectable } from '@angular/core';
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
  constructor() { }

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
    this.isAuth = false;
  }
  

}
