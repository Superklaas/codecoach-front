import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { InitService } from 'src/app/utility/service/materialize/init.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, AfterViewInit {

  @Input()
  username: string;
  @Input()
  role: string;

  constructor(private initService: InitService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initService.initDropdowns();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl(`/home`);
  }

}
