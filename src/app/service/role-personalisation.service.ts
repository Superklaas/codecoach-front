import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolePersonalisationService {
  color: 'yellow' | 'light-blue' = 'yellow';

  constructor(private router: Router) { 
    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe((ev:NavigationStart) => {
      this.color='yellow';
      if(ev.url.startsWith('/dashboard-coach')){
        this.color='light-blue';
      }
    });
  }
}
