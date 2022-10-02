import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';
import { map, Observable, tap } from 'rxjs';
import { IAuthenticationService } from '@interfaces/authentication-service.interface';

@Injectable({ providedIn: 'root' })
export class MsalAuthenticationService implements IAuthenticationService {
  constructor(private msalService: MsalService) { }

  login(): Observable<void> {
    return this.msalService.loginPopup().pipe(
      tap((response) => this.setUser(response.account)),
      map(() => undefined),
    );
  }

  private setUser(account: AccountInfo | null): void {
    this.msalService.instance.setActiveAccount(account);
  }

  logout(): Observable<void> {
    return this.msalService.logout();
  }
}