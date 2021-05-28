import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-coach-topics-by-admin',
  templateUrl: './edit-coach-topics-by-admin.component.html',
  styleUrls: ['./edit-coach-topics-by-admin.component.css']
})
export class EditCoachTopicsByAdminComponent implements OnInit {

  id: number;
  user$: Observable<User>;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.user$ = this.userService.get(this.id)
  }

  backToProfile() {
    this.router.navigateByUrl(`/dashboard-admin/edit/${this.id}`)
  }
}

