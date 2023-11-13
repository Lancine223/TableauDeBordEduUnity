import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveaux } from 'app/model/niveaux';
import { NiveauService } from 'app/service/niveau.service';
import { AjoutModifierFiliereComponent } from '../ajout-modifier-filiere/ajout-modifier-filiere.component';
import { FiliereService } from 'app/service/filiere.service';

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.scss']
})
export class DetailNiveauComponent implements OnInit {
  niveau: Niveaux;

  constructor(private _dialog: MatDialog ,
    private niveauService: NiveauService,
     private route: ActivatedRoute,
     private router: Router,
     private filiereService: FiliereService ) { }

  ngOnInit() {
    this.filiereService.getFiliereList();
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // Convertir l'ID en nombre
      this.niveauService.getNiveauById(id).subscribe(niveau => this.niveau = niveau);
    });
    console.log("filiere", this.niveau.filiere)
  }

  ajouterFiliere() {
    // Naviguer vers la page d'ajout de filière pour ce niveau
    this.router.navigate(['/ajouter-filiere', this.niveau.id]);
  }

  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutModifierFiliereComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: any, enterAnimationDuration: string, exitAnimationDuration: string) {

    const dialogRef = this._dialog.open(AjoutModifierFiliereComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
    
  }


}
