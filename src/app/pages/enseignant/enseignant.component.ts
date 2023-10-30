import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Enseignant } from 'app/model/enseignant';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
  listeData:any = [];
  enseignants: Enseignant[] = [
    {
      id: 1,
      nom: "lass",
      prenom: "keith",
      domaine: "info",
      niveau: "l1",
      email: "info@",
      motDePasse:"fffdfdff"
    },{
      id: 2,
      nom: "lass",
      prenom: "keith",
      domaine: "info",
      niveau: "l1",
      email: "info@",
      motDePasse:"fffdfdff"
    }
  ];
  displayedColumns: string[] = ['id', 'Nom', 'Prenom', 'Domaine', 'Niveau', 'Email', 'Mot de passe'];
  // dataSource: MatTableDataSource<mesures>;
  dataSource: MatTableDataSource <Enseignant>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }


  ngAfterViewInit() {
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

  ngOnInit(): void {
       
    this.dataSource = new MatTableDataSource(this.enseignants);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
    
  }

}
