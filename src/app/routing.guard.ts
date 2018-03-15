import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router'
import { Observable } from 'rxjs/Observable'

import { AuthService } from './core/auth.service'

@Injectable()
export class RoutingGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.authenticated) {
      this.router.navigate(['/signin'])
      console.log('not autorized')
      return false
    }
    console.log('you are welcome!')
    return true
  }
}
