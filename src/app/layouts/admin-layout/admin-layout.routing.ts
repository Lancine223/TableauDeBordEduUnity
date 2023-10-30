import { Routes } from '@angular/router';

import { EnseignantComponent } from 'app/pages/enseignant/enseignant.component';
import { TableauDeBordComponent } from 'app/pages/tableau-de-bord/tableau-de-bord.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { EtudiantComponent } from 'app/pages/etudiant/etudiant.component';
import { AlertEnseignantComponent } from 'app/pages/alert-enseignant/alert-enseignant.component';
import { AdminComponent } from 'app/pages/admin/admin.component';
import { ConnexionComponent } from 'app/pages/connexion/connexion.component';
// import { ConnexionComponent } from 'app/pages/connexion/connexion.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',      component: ConnexionComponent },
    { path: 'dashboard',      component: TableauDeBordComponent },
    { path: 'profile',   component: ProfileComponent },
    { path: 'enseignant',      component: EnseignantComponent },
    { path: 'etudiant',     component: EtudiantComponent },
    { path: 'admin',     component: AdminComponent },
    { path: 'alert-en',          component: AlertEnseignantComponent },
];
