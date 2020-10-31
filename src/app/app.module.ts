import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgStdLandingComponent } from './ng-std-landing/ng-std-landing.component';
import { LogUpdateService } from './services/log-update.service';
import { SwStatusComponent } from './sw-status/sw-status.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStdLandingComponent,
    SwStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
