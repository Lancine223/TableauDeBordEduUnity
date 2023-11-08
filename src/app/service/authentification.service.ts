import { Injectable } from '@angular/core';
import { Admin } from 'app/model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private admin1 : Admin|undefined;
  constructor() { }
  setAdminConnect(admin : Admin) {
    this.admin1 = admin;
  }
  getAdminConnect():Admin |undefined { 
    return this.admin1;
  }
}
