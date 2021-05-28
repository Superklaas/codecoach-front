import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolePersonalisationService {
  color: 'yellow darken-2' | 'light-blue' | 'green' = 'yellow darken-2';

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe((ev:NavigationStart) => {
      this.color='yellow darken-2';
      if(ev.url.startsWith('/dashboard-coach')){
        this.color='light-blue';
      }
      if(ev.url.startsWith('/dashboard-admin')){
        this.color='green';
      }
    });
  }
}
