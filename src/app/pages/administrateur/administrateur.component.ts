import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from 'app/model/admin';
import { AdministrateurService } from 'app/service/administrateur.service';
import { AuthentificationService } from 'app/service/authentification.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.scss']
})
export class AdministrateurComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'action'];  
  admins: Admin[]|any = [];

  adminConnecter: Admin|undefined ;
 
  listeData:any = [];
  dataSource!: MatTableDataSource<Admin>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor( private adminService: AdministrateurService, private authService: AuthentificationService) {
    this.adminConnecter = this.authService.getAdminConnect();
    this.dataSource = new MatTableDataSource(this.admins);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(){
    console.log('aaaaaaaaaaaaaa');
    this.adminService.getAdminList().subscribe(admin => {
      this.admins = admin;
      this.dataSource = new MatTableDataSource(this.admins);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    console.log("Resultat+++++++++++++++"+this.dataSource);
      
      this.adminService.update$.subscribe(() => {
        // Mettez à jour vos données ici
        this.refreshData();
    
    });
      
    });
  }

  private refreshData() {
    // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
    // Appel de la méthode du service pour récupérer les mesures
    this.admins = this.adminService.getAdminList();
    this.dataSource = new MatTableDataSource(this.admins);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onDelete(id:number){
    this.adminService.deleteAdmin(id).subscribe({
     next: res => {
       // Traiter la réponse de la requête de suppression
       console.log('Admin supprimé avec succès.', res);
       this.admins = this.admins.filter(user => user.idAdministrateur !== id);
     },
     error: err => {
       // Gérer les éventuelles erreurs de suppression
       console.error('Une erreur est survenue lors de la suppression de l\'administrateur.', err);
     }});
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
