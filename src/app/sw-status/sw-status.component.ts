import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-sw-status',
  templateUrl: './sw-status.component.html',
  styleUrls: ['./sw-status.component.scss']
})
export class SwStatusComponent implements OnInit {

  constructor(swStatus: SwUpdate) {
    const t = (swStatus as any).sw;
    console.log('t: ', t);
    console.log(globalThis);
    const reg = navigator.serviceWorker.getRegistration().then(registration => {
      console.log('registration: ', registration);

    });


    class ComponentModel {
      state: any;
      updateVia: any;
      scriptUrl: any;
      scope: any;
      notifications: any;
      constructor() {
        navigator.serviceWorker.getRegistration().then(registration => {
          console.log('registration: ', registration);
          this.state = registration.active.state;
          this.scriptUrl = registration.active.scriptURL;
          this.scope = registration.scope;
          this.updateVia = registration.updateViaCache;
          this.notifications = registration.getNotifications();
        });
      }
      static init(): this {
        return new ComponentModel();
      }
    }
  }

  ngOnInit(): void {
  }

}
