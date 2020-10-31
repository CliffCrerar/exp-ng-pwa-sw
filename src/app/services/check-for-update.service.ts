import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({ providedIn: 'any' })
export class CheckForUpdateService {
  checkInterVal = 5000;
  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    // Allow the app to stabilize first, before starting polling for updates with `interval()`.
    this.checkInterVal = 6 * 60 * 60 * 1000;
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everySixHours$ = interval(this.checkInterVal)
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }
}
