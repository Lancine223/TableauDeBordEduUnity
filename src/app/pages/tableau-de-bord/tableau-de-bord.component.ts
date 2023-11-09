import { Component, OnInit } from '@angular/core';
import { Admin } from 'app/model/admin';
import { AdministrateurService } from 'app/service/administrateur.service';
import { AuthentificationService } from 'app/service/authentification.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent implements OnInit {

  AdminConnecter: Admin| undefined;
  constructor(private adminService: AdministrateurService, private authService: AuthentificationService,
    ) { 
      this.AdminConnecter = this.authService.getAdminConnect();
      // console.log("Admin Connecter est :", this.AdminConnecter);
    }
    
  ngOnInit() {
    
  }
}
