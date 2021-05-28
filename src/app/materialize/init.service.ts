import { Injectable } from '@angular/core';
import * as M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() { }

  initDropdowns() {
    setTimeout(() => {
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {coverTrigger: false});
    }, 1);
  }

  initCollapsible() {
    setTimeout(() => {
      M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    }, 1);
  }

  autoInit() {
    // try to avoid using this function. Since it might break the others
    setTimeout(() => {
      M.AutoInit();
    }, 1);
  }

  initFormSelect() {
    setTimeout(() => {
      M.FormSelect.init(document.querySelectorAll('select'), {classes: '', dropdownOptions: {coverTrigger: false}});
    }, 1);
  }

  initParalax() {
    setTimeout(() => {
      M.Parallax.init(document.querySelectorAll('.parallax'));
    }, 1);
  }

  initSidenav() {
    setTimeout(() => {
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
    }, 1);
  }

  initModal() {
    setTimeout(() => {
      M.Modal.init(document.querySelectorAll('.modal'));
    }, 1);
  }
}
