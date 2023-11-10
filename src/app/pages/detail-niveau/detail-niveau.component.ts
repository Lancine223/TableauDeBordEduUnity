import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Niveaux } from 'app/model/niveaux';
import { NiveauService } from 'app/service/niveau.service';

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.scss']
})
export class DetailNiveauComponent implements OnInit {
niveau: Niveaux;
  constructor(private route: ActivatedRoute, private router: Router, private niveauService: NiveauService) { }

  ngOnInit(): void {
    // Récupération de l'ID du niveau depuis l'URL
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // Convertir l'ID en nombre
      this.niveauService.getNiveauById(id).subscribe(niveau => this.niveau = niveau);
    });
  }

  ajouterFiliere() {
    // Naviguer vers la page d'ajout de filière pour ce niveau
    this.router.navigate(['/ajouter-filiere', this.niveau.id]);
  }

}
