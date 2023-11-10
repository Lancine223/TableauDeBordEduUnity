import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from 'app/model/admin';
import { AdministrateurService } from 'app/service/administrateur.service';
import { AuthentificationService } from 'app/service/authentification.service';
import Swal from 'sweetalert2';
import { AjoutModifierAdminComponent } from '../ajout-modifier-admin/ajout-modifier-admin.component';
import { Niveaux } from 'app/model/niveaux';
import { NiveauService } from 'app/service/niveau.service';
import { MatDialog } from '@angular/material/dialog';
import { AjoutModifierNiveauComponent } from '../ajout-modifier-niveau/ajout-modifier-niveau.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent implements OnInit {
  nives: Niveaux []|any;
  datasource: any;
  AdminConnecter: Admin| undefined;
  constructor(private niveauService: NiveauService, private route: Router, private _dialog: MatDialog, private authService: AuthentificationService,
    ) { 
      this.AdminConnecter = this.authService.getAdminConnect();
      // console.log("Niveau Connecter est :", this.AdminConnecter);
    }
    
  ngOnInit() {
    this.loadNiveauList();
    
  }

  
// Exemple pour charger la liste des administrateurs
loadNiveauList(): void {
  this.niveauService.getNiveauList().subscribe(
    (data) => {
      this.nives = data;
      this.datasource = this.nives;
     
      this.niveauService.update$.subscribe(() => {
        // Mettez à jour vos données ici
        this.refreshData();
    });
    },
    (error) => {
      console.error('Erreur lors du chargement de la liste des administrateurs:', error);
    }
  );
}

detailerniv(data: any){
this.route.navigate(['../detail-niveau']);

}

   refreshData() {
    // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
    // Appel de la méthode du service pour récupérer les mesures
    this.nives = this.niveauService.getNiveauList();
    this.datasource = this.nives;
  }

  //ajouter un admin
  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutModifierNiveauComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  
}
