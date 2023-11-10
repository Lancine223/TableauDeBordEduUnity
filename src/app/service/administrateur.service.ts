import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'app/model/admin';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
    this.updateEvent.complete();
  }
  private baseUrl = 'http://localhost:8080/admin/'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }

  addAdmin(adminData: any) {
    return this.http.post("http://localhost:8080/admin/add", adminData);
  }

  loginAdmin(email: string, motDePasse: string) {
    return this.http.post(`${this.baseUrl}login?email=${email}&mot_de_passe=${motDePasse}`, null);
  }

 

  getAdminList():Observable<any> {
    return this.http.get("http://localhost:8080/admin/list");
    // console.log(this.getAdminList());
  }

  // Méthode pour récupérer les informations de l'administrateur connecté



  modifyAdmin(adminData: any) {
    return this.http.put("http://localhost:8080/admin/modifier", adminData);
  }

  
  // deleteAdmin(adminData: any) {
  //   return this.http.delete(this.baseUrl+'supprimer', { body: adminData });
  // }
  deleteAdmin(adminData: any) {
    return this.http.delete("http://localhost:8080/admin/supprimer", { body: adminData, responseType: 'text' });
  }
  

}
