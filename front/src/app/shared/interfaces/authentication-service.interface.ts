import { Observable } from 'rxjs';

export interface IAuthenticationService {
  login(): Observable<void>;
  logout(): Observable<void>;
}
