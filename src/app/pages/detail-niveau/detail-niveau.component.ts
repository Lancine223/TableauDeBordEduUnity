import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveaux } from 'app/model/niveaux';
import { NiveauService } from 'app/service/niveau.service';
import { AjoutModifierFiliereComponent } from '../ajout-modifier-filiere/ajout-modifier-filiere.component';
import { FiliereService } from 'app/service/filiere.service';
import { Filiere } from 'app/model/filiere.model';

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.scss']
})
export class DetailNiveauComponent implements OnInit {
  niveau: Niveaux;
  filieres: Filiere[]|any;
  constructor(private _dialog: MatDialog ,
    private niveauService: NiveauService,
     private route: ActivatedRoute,
     private router: Router,
     private filiereService: FiliereService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // Convertir l'ID en nombre
      this.niveauService.getNiveauById(id).subscribe(niveau => this.niveau = niveau);
      this.loadFilieres(id);
    });
    
  }

  loadFilieres(niveauId: number): void {
    this.filiereService.getFilieresByNiveau(niveauId).subscribe(
      (filieres: any[]) => {
        this.filieres = filieres;
      },
      (error) => {
        console.error('Erreur lors du chargement des filières', error);
        // Gérer l'erreur selon vos besoins
      }
    );
  }
 

  OpenDialogAdd(data: Niveaux, enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutModifierFiliereComponent,{
      data, enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: Filiere, enterAnimationDuration: string, exitAnimationDuration: string) {

    const dialogRef = this._dialog.open(AjoutModifierFiliereComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
    
  }


}
