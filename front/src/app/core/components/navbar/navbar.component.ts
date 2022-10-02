import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly countries = ['gb', 'fr'];

  constructor(private translateService: TranslateService) { }

  setTranslation(country: string): void {
    this.translateService.use(country);
  }
}
