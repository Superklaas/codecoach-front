import { AfterViewInit, Directive } from '@angular/core';
import * as M from 'materialize-css';

@Directive()
export abstract class InitMaterializeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    M.AutoInit();
  }
}
