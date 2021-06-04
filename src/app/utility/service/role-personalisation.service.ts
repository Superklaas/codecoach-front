import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolePersonalisationService {
  color: 'yellow darken-2' | 'light-blue darken-2' | 'green darken-2' = 'yellow darken-2';
  private colorSubject = new BehaviorSubject("yellow darken-2");
  color$ = this.colorSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((ev:NavigationEnd) => {
      this.color='yellow darken-2';
      if(ev.url.startsWith('/dashboard-coach')){
        this.color='light-blue darken-2';
      }
      if(ev.url.startsWith('/dashboard-admin')){
        this.color='green darken-2';
      }
      this.colorSubject.next(this.color);
    });
  }
}
