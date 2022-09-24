import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    login: this.fb.control<string | null>(null),
    password: this.fb.control<string | null>(null),
  });

  constructor(private fb: FormBuilder) {}
}
