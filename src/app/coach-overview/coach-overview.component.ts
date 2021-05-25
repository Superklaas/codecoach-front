import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {

  coaches$: Observable<User[]>;
  loaded: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    setTimeout(()=>{  
      this.coaches$ = this.userService.getAllCoaches();
      this.loaded = true;
    }, 0);
    
    
  }

}
