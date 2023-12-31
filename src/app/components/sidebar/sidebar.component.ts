import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'app/service/auth-guard.service';
import { AuthentificationService } from 'app/service/authentification.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/tableaudebord', title: 'Tableau de bord',  icon: 'fa-chart-line', class: '' },
    { path: '/enseignant', title: 'Enseignant',  icon:'fa-user-graduate', class: '' },
    { path: '/etudiant', title: 'Etudiant',  icon:'fa-users', class: '' },
    { path: '/admin', title: 'Admin',  icon:'fa-user-shield', class: '' },
    { path: '/alert-en', title: 'Alert',  icon:'fa-bell', class: '' },
    { path: '/abonnement', title: 'Abonnement',  icon:'fa-money', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  

  constructor(private authService: AuthentificationService,
    private authguardService: AuthGuardService) { 
    
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  deConnecter(){
   this.authService.deconnecter();
   this.authService.triggerUpdate();
   
  }

}
