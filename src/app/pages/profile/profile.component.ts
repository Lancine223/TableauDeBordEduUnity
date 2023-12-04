import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Admin } from 'app/model/admin';
import { AdministrateurService } from 'app/service/administrateur.service';
import { AuthentificationService } from 'app/service/authentification.service';
import { AjoutModifierAdminComponent } from '../ajout-modifier-admin/ajout-modifier-admin.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
adminConnecter: Admin|undefined ;
  constructor(private authService: AuthentificationService, private adminService: AdministrateurService,private _dialog: MatDialog,) {
    this.adminConnecter = JSON.parse(localStorage.getItem('enseignant'));
   }

  ngOnInit(): void {
this.authService.update$.subscribe(() => {
  this.adminConnecter = JSON.parse(localStorage.getItem('enseignant'));
});

  }

  openEditForm(data: any, enterAnimationDuration: string, exitAnimationDuration: string) {

    const dialogRef = this._dialog.open(AjoutModifierAdminComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
    this.authService.triggerUpdate();
  }

}
