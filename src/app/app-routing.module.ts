import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgStdLandingComponent } from './ng-std-landing/ng-std-landing.component';
import { SwStatusComponent } from './sw-status/sw-status.component';

const routes: Routes = [{
  path: '',
  component: SwStatusComponent
}, {
  path: 'standard-bootstrap-page',
  component: NgStdLandingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
