import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MsalAuthenticationService } from '../../core/services/authentication/msal-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected readonly form = this.fb.group({
    login: this.fb.control<string | null>(null),
    password: this.fb.control<string | null>(null),
  });

  constructor(
    private fb: FormBuilder,
    private authService: MsalAuthenticationService,
  ) { }

  protected login(): void {
    this.authService.login().subscribe();
  }
}
