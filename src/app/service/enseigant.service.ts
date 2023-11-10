import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseigantService {
  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
    this.updateEvent.complete();
  }
  private baseUrl = 'http://localhost:8080/enseignant/'; // Remplacez l'URL par celle de votre contrôleur Spring Boot

  constructor(private http: HttpClient) { }


  getEnseignantList():Observable<any> {
    return this.http.get("http://localhost:8080/enseignant/read");
    // console.log(this.getAdminList());
  }

  // Méthode pour récupérer les informations de l'administrateur connecté
  ChangeAccesEnseigant(idEnseigant: number) {
    return this.http.delete("http://localhost:8080/enseignant/changeAccess/");
  }
  
  // deleteAdmin(adminData: any) {
  //   return this.http.delete(this.baseUrl+'supprimer', { body: adminData });
  // }
  deleteEnseignant(idEnseigant: number) {
    return this.http.delete("http://localhost:8080/enseignant/delete");
  }
}
