import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Niveaux } from 'app/model/niveaux';
import { NiveauService } from 'app/service/niveau.service';
import Swal from 'sweetalert2';
import { AjoutModifierAdminComponent } from '../ajout-modifier-admin/ajout-modifier-admin.component';
import { FiliereService } from 'app/service/filiere.service';
import { Filiere } from 'app/model/filiere.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-modifier-filiere',
  templateUrl: './ajout-modifier-filiere.component.html',
  styleUrls: ['./ajout-modifier-filiere.component.scss']
})
export class AjoutModifierFiliereComponent implements OnInit {
  niveau: Niveaux;
  filiereForm: FormGroup;
  // roleadmin: any[] = ["simple", "superadmin"];


  constructor(
    private _dialogRef: MatDialogRef<AjoutModifierAdminComponent>,
    private formBuilder: FormBuilder,
    private _dialog: MatDialog,
    private route: ActivatedRoute,
     private router: Router,
    private niveauService: NiveauService,
    private filiereService: FiliereService,
    @Inject(MAT_DIALOG_DATA) public data: Filiere | any , 
  
  ) {
    this.filiereForm = this.formBuilder.group({
      idFiliere:'',
      niveau:  this.niveau , // Si c'est une modification, initialisez avec l'ID existant
      nom: ['', Validators.required ]
      
    });
  }
  ngOnInit(): void {
    this.filiereForm.patchValue(this.data);

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // Convertir l'ID en nombre
      this.niveauService.getNiveauById(id).subscribe(niveau => this.niveau = niveau);
    });
  }

  onSubmit() {
    if (this.filiereForm.valid) {
      const data = this.filiereForm.value;
      if (this.data) {
        // Update
        this.filiereService.modifierFiliere(data).subscribe(
          (response) => {
            console.log('Filiere modifié avec succès:', response);
            this.filiereForm.reset();
            this.filiereService.triggerUpdate();
            this._dialogRef.close(true);
          
            Swal.fire('Merci !...', 'Filiere modifié avec succès!', 'success');
            this.filiereService.triggerUpdate();
          },
          (error) => {
            console.error('Erreur lors de la modification de Filiere:', error);
          }
        );
        this._dialogRef.close(true);
        this.filiereService.triggerUpdate();
       
      } else {
        // Create
       
        this.filiereService.ajouterFiliere(data).subscribe(
          (response) => {
            console.log('Filiere enregistré avec succès:', response);
            this.filiereForm.reset();
            this.filiereService.triggerUpdate();
            this._dialogRef.close(true);
            Swal.fire('Merci !...', 'Filiere enregistré avec succès!', 'success');
            this.filiereService.triggerUpdate();
          },
          (error) => {
            console.error('Erreur lors de l\'ajout de Filiere:', error);
          }
        );
        this._dialogRef.close(true);
        this.filiereService.triggerUpdate();
      }
    }
  }

}
