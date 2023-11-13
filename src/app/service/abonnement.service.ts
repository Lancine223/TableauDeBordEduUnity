import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  openSnackBar(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  private baseUrl = 'http://localhost:8080/abonnement'; //  de base de votre API Spring Boot

  constructor(private http: HttpClient) { }
  triggerUpdate() {
    this.updateEvent.next();
  }
  
  getTotalAbonnes() {
    return this.http.get<number>(`${this.baseUrl}/totalAbonnes`);
  }

  getTotalMontantAbonnements() {
    return this.http.get<number>(`${this.baseUrl}/totalMontantAbonnements`);
  }
}
