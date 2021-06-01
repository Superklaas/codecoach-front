import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from '../../utility/model/User';
import {UserService} from '../../utility/service/user.service';


@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {

  coaches$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.coaches$ = this.userService.getAllCoaches();
  }

}
