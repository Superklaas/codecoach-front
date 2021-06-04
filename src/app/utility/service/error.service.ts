import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  message: string;

  constructor(private router: Router) { }

  throwError(e) {
    this.message = e.toString();
    this.router.navigateByUrl(`/error`);
  }
}
