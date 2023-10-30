import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { RouterModule } from '@angular/router';
import {MatPaginatorModule } from '@angular/material/paginator'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EnseignantComponent } from './pages/enseignant/enseignant.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AlertEnseignantComponent } from './pages/alert-enseignant/alert-enseignant.component';
import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatPaginatorModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EnseignantComponent,
    EtudiantComponent,
    ConnexionComponent,
    ProfileComponent,
    AlertEnseignantComponent,
    TableauDeBordComponent,
    AdminComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
