import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private router: Router,
              private oauthService: OAuthService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return this.oauthService.hasValidAccessToken();
  }

  async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return this.oauthService.hasValidAccessToken();
  }
}
