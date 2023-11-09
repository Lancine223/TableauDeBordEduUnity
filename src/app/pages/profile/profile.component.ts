import { Component, OnInit } from '@angular/core';
import { Admin } from 'app/model/admin';
import { AuthentificationService } from 'app/service/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
adminConnecter: Admin|undefined ;
  constructor(private authService: AuthentificationService) {
    this.adminConnecter = authService.getAdminConnect();
   }

  ngOnInit(): void {

  }

}
