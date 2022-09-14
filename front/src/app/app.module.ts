import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const MSALFactory = () => new PublicClientApplication({
  auth: {
    clientId: environment.clientId,
    redirectUri: environment.azureRedirectUri,
  },
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MSAL_INSTANCE, useFactory: MSALFactory }, MsalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
