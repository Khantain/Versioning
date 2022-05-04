import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(private authService: MsalService) {}

  login(): void {
    this.authService
      .loginPopup()
      .pipe(
        tap(resp =>this.authService.instance.setActiveAccount(resp.account)),
        tap(() => this.setIsLoggedIn())
      )
      .subscribe();
  }

  logout(): void {
    this.authService.logout().pipe(
      tap(() => this.setIsLoggedIn())
    ).subscribe();
  }

  private setIsLoggedIn(): void {
    this.isLoggedIn = !!this.authService.instance.getActiveAccount();
  }
}
