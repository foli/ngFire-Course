// this file has been modified since the lecture was recorded
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import rxjs operators
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

// remove authService
// import AngularFireAuth
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class RoutingGuard implements CanActivate {
  // in the constructor
  // remove authService injection
  // inject AngularFireAuth
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // add the following
    // here we are looking for the user in the authState
    // if not available we redirect
    return this.afAuth.authState
      .take(1)
      .map(user => !!user)
      .do(loggedIn => {
        if (!loggedIn) {
          console.log('not autorized');
          this.router.navigate(['/signin']);
        }
      });
  }
}
