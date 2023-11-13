import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filiere } from 'app/model/filiere.model';
import { Niveaux } from 'app/model/niveaux';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
 
  private baseUrl = 'http://localhost:8080/filiere/'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }
  triggerUpdate() {
    this.updateEvent.next();
  }
  addFiliere(filiereData: any) {
    return this.http.post("http://localhost:8080/filiere/add", filiereData);
  }

  
  getFiliereById(filiereId: number): Observable<Filiere> {
    const url = `${this.baseUrl}read/${filiereId}`; // Remplacez avec votre URL d'API
    return this.http.get<Filiere>(url);
  }

  getFiliereList():Observable<any> {
    return this.http.get("http://localhost:8080/filiere/list");
    // console.log(this.getAdminList());
  }

  // Méthode pour récupérer les informations de l'administrateur connecté

  modifyFiliere(filiereData: any) {
    return this.http.put("http://localhost:8080/filiere/modifier", filiereData);
  }

  
  // deleteAdmin(adminData: any) {
  //   return this.http.delete(this.baseUrl+'supprimer', { body: adminData });
  // }
  deleteFiliere(filiereData: any) {
    return this.http.delete("http://localhost:8080/filiere/supprimer", { body: filiereData, responseType: 'text' });
  }
  
}
