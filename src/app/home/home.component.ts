import {AfterViewInit, Component, OnInit} from '@angular/core';
import { InitMaterializeComponent } from '../init-materialize.component';
import * as M from 'materialize-css';
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
