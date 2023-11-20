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
import { AuthGuardService } from 'app/service/auth-guard.service';
import { AbonnementComponent } from 'app/pages/abonnement/abonnement.component';
// import { ConnexionComponent } from 'app/pages/connexion/connexion.component';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'login',      component: ConnexionComponent },
    { path: 'tableaudebord', canActivate : [AuthGuardService],     component: TableauDeBordComponent },
    { path: 'profile',canActivate : [AuthGuardService],    component: ProfileComponent },
    { path: 'enseignant',canActivate : [AuthGuardService],       component: EnseignantComponent },
    { path: 'etudiant',canActivate : [AuthGuardService],      component: EtudiantComponent },
    { path: 'admin',canActivate : [AuthGuardService],      component: AdministrateurComponent },
    { path: 'alert-en', canActivate : [AuthGuardService],          component: AlertEnseignantComponent },
    { path: 'abonnement', canActivate : [AuthGuardService],          component: AbonnementComponent },
    { path: 'detail-niveau/:id',canActivate : [AuthGuardService],           component: DetailNiveauComponent },
    { path: 'detail-filiere/:id',  canActivate : [AuthGuardService],         component: DetailFiliereComponent },
    
];
