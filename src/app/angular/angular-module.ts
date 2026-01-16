import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing-module';
import { Angular } from './angular';
import { NgIntro } from './components/ng-intro/ng-intro';
import { NgEssentials } from './components/ng-essentials/ng-essentials';


@NgModule({
  declarations: [
    Angular,
    NgIntro,
    NgEssentials
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }
