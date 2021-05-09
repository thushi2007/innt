import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {StepComponent} from './step/step.component';
import { StepperBaseCompComponent } from './stepper-base-comp/stepper-base-comp.component';
import {AngularResizedEventModule} from 'angular-resize-event';

@NgModule({
  declarations: [
    StepperComponent,
    HeaderComponent,
    StepComponent,
    StepperBaseCompComponent
  ],
  exports: [
    StepperComponent,
    HeaderComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularResizedEventModule
  ]
})
export class StepperModule {
}
