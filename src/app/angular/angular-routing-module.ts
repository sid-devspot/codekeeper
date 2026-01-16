import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angular } from './angular';
import { NgIntro } from './components/ng-intro/ng-intro';
import { NgEssentials } from './components/ng-essentials/ng-essentials';

const routes: Routes = [
  {
    path: '',
    component: Angular,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'intro' },
      { path: 'intro', component: NgIntro },
      { path: 'essentials', component: NgEssentials },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
