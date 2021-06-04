import {Component,  OnInit} from '@angular/core';
import {User} from "../../../utility/model/User";
import {ProfileService} from "../../../utility/service/profile.service";
import {Router} from "@angular/router";
import {TopicService} from "../../../utility/service/topic.service";
import {Topic} from "../../../utility/model/Topic";

@Component({
  selector: 'app-request-change-coaching-topic',
  templateUrl: './request-change-coaching-topic.component.html',
  styleUrls: ['./request-change-coaching-topic.component.css']
})
export class RequestChangeCoachingTopicComponent implements OnInit {

 user: User

  constructor(public profileService: ProfileService, private router: Router, private topicService: TopicService) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser(): void {
    this.profileService.currentUser$.subscribe(user => {
     this.user = user;
    });
  }

  cancel() {
    this.router.navigateByUrl("/dashboard-coach");
  }

  update() {
  }

  sendRequest($event: Topic[]) {
    this.topicService.requestUpdateTopics($event,this.user.id)
      .subscribe( _ => this.router.navigateByUrl("/dashboard-coach"))
  }

}
