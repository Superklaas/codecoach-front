import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  role: string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }

}
