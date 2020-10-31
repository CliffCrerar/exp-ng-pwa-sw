import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'any' })
export class PromptUpdateService {

  public updatesAvailable: boolean;
  constructor(private updates: SwUpdate) {
    updates.available.subscribe(event => this.updatesAvailable = true);
  }
  activateUpdates(): void {
    this.updates.activateUpdate()
      .catch(error => console.error(error.message))
      .then(() => document.location.reload());
  }
}
