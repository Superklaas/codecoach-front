import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolePersonalisationService {
  color: 'yellow' | 'light-blue' | 'green' = 'yellow';
  private colorSubject = new BehaviorSubject("yellow");
  color$ = this.colorSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((ev:NavigationEnd) => {
      this.color='yellow';
      if(ev.url.startsWith('/dashboard-coach')){
        this.color='light-blue';
      }
      if(ev.url.startsWith('/dashboard-admin')){
        this.color='green';
      }
      this.colorSubject.next(this.color);
    });
  }
}
