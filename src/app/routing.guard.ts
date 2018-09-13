import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        console.log('logged in: ', loggedIn);
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/auth']);
        }
      })
    );
  }
}
