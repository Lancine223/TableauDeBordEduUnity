import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrateurService } from 'app/service/administrateur.service';
import { AuthentificationService } from 'app/service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  admin:any;

  constructor(private autService: AuthentificationService,private router: Router,private formBuilder: FormBuilder, private adminService: AdministrateurService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, motDePasse } = this.loginForm.value;
      this.adminService.loginAdmin(email, motDePasse).subscribe(
        (response: any) => {
          const IdAdmincon = response.idAdministrateur;
          localStorage.setItem('idAdministrateur', IdAdmincon);
          this.autService.setAdminConnect(response);
          // Gérer la connexion réussie ici
          this.autService.triggerUpdate()
          this.router.navigate(['/tableaudebord']);
        },
        (error) => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Email ou mot de passe invalide !",

            // footer: '<a href>Why do I have this issue?</a>'
          })
        }
      );


    }
  }

}
