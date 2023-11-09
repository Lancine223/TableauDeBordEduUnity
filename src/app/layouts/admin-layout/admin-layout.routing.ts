import { Routes } from '@angular/router';

import { EnseignantComponent } from 'app/pages/enseignant/enseignant.component';
import { TableauDeBordComponent } from 'app/pages/tableau-de-bord/tableau-de-bord.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { EtudiantComponent } from 'app/pages/etudiant/etudiant.component';
import { AlertEnseignantComponent } from 'app/pages/alert-enseignant/alert-enseignant.component';
import { ConnexionComponent } from 'app/pages/connexion/connexion.component';
import { AdministrateurComponent } from 'app/pages/administrateur/administrateur.component';
import { DetailNiveauComponent } from 'app/pages/detail-niveau/detail-niveau.component';
import { DetailFiliereComponent } from 'app/pages/detail-filiere/detail-filiere.component';
// import { ConnexionComponent } from 'app/pages/connexion/connexion.component';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'login',      component: ConnexionComponent },
    { path: 'tableaudebord',      component: TableauDeBordComponent },
    { path: 'profile',   component: ProfileComponent },
    { path: 'enseignant',      component: EnseignantComponent },
    { path: 'etudiant',     component: EtudiantComponent },
    { path: 'admin',     component: AdministrateurComponent },
    { path: 'alert-en',          component: AlertEnseignantComponent },
    { path: 'detail-niveau',          component: DetailNiveauComponent },
    { path: 'detail-filiere',          component: DetailFiliereComponent },
    
];
