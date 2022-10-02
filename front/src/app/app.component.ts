import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;

  constructor(
    private authService: MsalService,
    translate: TranslateService,
  ) {
    translate.setDefaultLang('fr');
  }


  logout(): void {
    this.authService
      .logoutPopup()
      .pipe(tap(() => this.setIsLoggedIn()))
      .subscribe();
  }

  private setIsLoggedIn(): void {
    this.isLoggedIn = !!this.authService.instance.getActiveAccount();
  }
}
