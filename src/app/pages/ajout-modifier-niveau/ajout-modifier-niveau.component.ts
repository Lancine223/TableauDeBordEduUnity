import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AjoutModifierAdminComponent } from '../ajout-modifier-admin/ajout-modifier-admin.component';
import { NiveauService } from 'app/service/niveau.service';
import { Niveaux } from 'app/model/niveaux';

@Component({
  selector: 'app-ajout-modifier-niveau',
  templateUrl: './ajout-modifier-niveau.component.html',
  styleUrls: ['./ajout-modifier-niveau.component.scss']
})
export class AjoutModifierNiveauComponent implements OnInit {
  niveauForm: FormGroup;
  // roleadmin: any[] = ["simple", "superadmin"];

  constructor(
    private _dialogRef: MatDialogRef<AjoutModifierAdminComponent>,
    private formBuilder: FormBuilder,
    private _dialog: MatDialog,
    private niveauService: NiveauService,
    @Inject(MAT_DIALOG_DATA) public data: Niveaux | any
  ) {
    this.niveauForm = this.formBuilder.group({
      idNiveau: this.data ? this.data.Niveau : '', // Si c'est une modification, initialisez avec l'ID existant
      nom: [this.data ? this.data.nom : '', Validators.required]
      
    });
  }
  ngOnInit(): void {
    this.niveauForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.niveauForm.valid) {
      const data = this.niveauForm.value;
      if (this.data) {
        // Update
        this.niveauService.modifyNiveau(data).subscribe(
          (response) => {
            console.log('Niveau modifié avec succès:', response);
            this.niveauForm.reset();
            this.niveauService.triggerUpdate();
            this._dialogRef.close(true);
          
            Swal.fire('Merci !...', 'Niveau modifié avec succès!', 'success');
            this.niveauService.triggerUpdate();
          },
          (error) => {
            console.error('Erreur lors de la modification de niveau:', error);
          }
        );
        this._dialogRef.close(true);
        this.niveauService.triggerUpdate();
       
      } else {
        // Create
       
        this.niveauService.addNiveau(data).subscribe(
          (response) => {
            console.log('Niveau enregistré avec succès:', response);
            this.niveauForm.reset();
            this.niveauService.triggerUpdate();
            this._dialogRef.close(true);
            Swal.fire('Merci !...', 'Niveau enregistré avec succès!', 'success');
            this.niveauService.triggerUpdate();
          },
          (error) => {
            console.error('Erreur lors de l\'ajout de niveau:', error);
          }
        );
        this._dialogRef.close(true);
        this.niveauService.triggerUpdate();
      }
    }
  }
  
}
