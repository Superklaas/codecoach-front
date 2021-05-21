import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {InitMaterializeComponent} from './init-materialize.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends InitMaterializeComponent {
  constructor(private titleService: Title) {
    super();
    this.titleService.setTitle('CodeCoach');
  }
}
