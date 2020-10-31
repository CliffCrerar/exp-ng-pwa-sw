import { Component } from '@angular/core';
import { LogUpdateService } from './services/log-update.service';
import { CheckForUpdateService } from './services/check-for-update.service';
import { PromptUpdateService } from './services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Service worker experiment project';
  updateAvailable: boolean;
  constructor(
    private swLogService: LogUpdateService,
    private checkUpdateService: CheckForUpdateService,
    public promptUser: PromptUpdateService
  ) {
    console.log('swLogService: ', this.swLogService);

  }
  onClickReloadPage(): void {
    document.location.reload();
  }
  onClickSeeUpdate(): void {
    console.log('Click');
    this.promptUser.activateUpdates();
  }
}
