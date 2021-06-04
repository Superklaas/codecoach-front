import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

import { InitService } from './utility/service/materialize/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private initService: InitService, private titleService: Title) {
    initService.autoInit();
    this.titleService.setTitle('CodeCoach');
  }
}
