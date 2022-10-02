import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuthenticationService } from '@interfaces/authentication-service.interface';

@Injectable({ providedIn: 'root' })
export class LoginAuthenticationService implements IAuthenticationService {
  login(): Observable<void> {
    return of(undefined);
  }

  logout(): Observable<void> {
    return of(undefined);
  }
}