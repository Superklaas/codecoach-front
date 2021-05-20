import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { RolePersonalisationService } from '../service/role-personalisation.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  role: string;
  constructor(private authService: AuthenticationService, private roleStuff: RolePersonalisationService) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }
  
  get  color(){
    return this.roleStuff.color;
  }

}
