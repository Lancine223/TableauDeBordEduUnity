import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Enseignant } from 'app/model/enseignant';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Admin } from 'app/model/admin';
import { AuthentificationService } from 'app/service/authentification.service';
import Swal from 'sweetalert2';
import { EnseigantService } from 'app/service/enseigant.service';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  listeData:any = [];
  enseignants: Enseignant[]|any;
  displayedColumns: string[] = ['id', 'nom', 'prenom','telephone', 'etablissement','filiere', 'classe', 'email', 'diplome','acces', 'action'];  
  // admins: Admin []|any;

  adminConnecter: Admin|undefined ;
  dataSource!: MatTableDataSource<Enseignant>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private enseignantsService: EnseigantService, private _dialog: MatDialog, private authService: AuthentificationService) {
    this.adminConnecter = this.authService.getAdminConnect();
    this.dataSource = new MatTableDataSource(this.enseignants);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(){
   this.loadEnseignantList();
  }

  agrandirImage(urlImage: string) {
    // Ouvrir le composant détaillé pour afficher l'image en plein écran
    const dialogRef = this._dialog.open(ImageDetailComponent, {
      width: '50%',height: '90%',// Ajustez la largeur et la hauteur selon vos besoins
      data: { url: urlImage }
    });
  }
  

// Exemple pour charger la liste des administrateurs
loadEnseignantList(): void {
  this.enseignantsService.getEnseignantList().subscribe(
    (data) => {
      this.enseignants = data;
      this.dataSource = new MatTableDataSource(this.enseignants);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.enseignantsService.update$.subscribe(() => {
        // Mettez à jour vos données ici
        this.refreshData();
    });
    },
    (error) => {
      console.error('Erreur lors du chargement de la liste des enseigants:', error);
    }
  );
}

   refreshData() {
    // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
    // Appel de la méthode du service pour récupérer les Enseignants
    this.enseignants = this.enseignantsService.getEnseignantList();
    this.dataSource = new MatTableDataSource(this.enseignants);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  //ajouter un admin

  //supprimer un admin
  onDelete(data: any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer?',
      text: 'Vous ne pourriez plus récupérer cette enseignant!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        
        this.enseignantsService.triggerUpdate();
        this.enseignantsService.deleteEnseignant(data).subscribe(
          (response) => {
            console.log('enseignant supprimé avec succès:', response);
            // Additional logic if needed
            this.enseignantsService.triggerUpdate();
            this.dataSource = new MatTableDataSource(this.enseignants);
            this.loadEnseignantList();
            Swal.fire(
              'Supprimer!',
              'Cette enseignant a été supprimer.',
              'success'
            )
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'enseignant:', error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Votre enseignant est en sécurité ',
          'error'
        )
      }
    })
  }

   // Exemple pour supprimer un administrateur
   DesActivate(data: any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir de desactiver?',
      text: 'Il ne pourra plus acceder à la plateforme !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, desactive-le !',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        
        this.enseignantsService.triggerUpdate();
        this.enseignantsService.ChangeAccesEnseigant(data).subscribe(
          (response) => {
            console.log('enseignant desactivé avec succès:', response);
            // Additional logic if needed
            this.enseignantsService.triggerUpdate();
            this.dataSource = new MatTableDataSource(this.enseignants);
            this.loadEnseignantList();
            Swal.fire(
              'Supprimer!',
              'Cet enseignant a été desactiver.',
              'success'
            )
          },
          (error) => {
            console.error('Erreur lors de la desactivation de l\'enseignant:', error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Votre enseignant est en sécurité ',
          'error'
        )
      }
    })
  }

  // Exemple pour supprimer un administrateur
  onActivate(data: any){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir activer?',
      text: 'Il pourra donc acceder à la plateforme !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, active-le !',
      cancelButtonText: 'Non, garde-le'
    }).then((result) => {
      if (result.value) {
        
        this.enseignantsService.triggerUpdate();
        this.enseignantsService.ChangeAccesEnseigant(data).subscribe(
          (response) => {
            console.log('enseignant activé avec succès:', response);
            // Additional logic if needed
            this.enseignantsService.triggerUpdate();
            this.dataSource = new MatTableDataSource(this.enseignants);
            this.loadEnseignantList();
            Swal.fire(
              'Supprimer!',
              'Cet enseignant a été activer.',
              'success'
            )
          },
          (error) => {
            console.error('Erreur lors de activation de l\'enseignant:', error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annuler',
          'Votre enseignant est en sécurité ',
          'error'
        )
      }
    })
  }



}
