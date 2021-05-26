import {AfterViewInit, Component} from '@angular/core';
import {InitService} from "../materialize/init.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {

  constructor(private initService: InitService) { }

  ngAfterViewInit(): void {
    this.initService.initParalax();
  }

}
