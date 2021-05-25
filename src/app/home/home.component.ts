import {AfterViewInit, Component, OnInit} from '@angular/core';
import { InitMaterializeComponent } from '../init-materialize.component';
import * as M from 'materialize-css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    const elements = document.getElementsByClassName('parallax');
    for(let i = 0; i < elements.length; i++) {
      M.Parallax.init(elements[i]);
    }
  }

}
