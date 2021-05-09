import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumberSpinnerComponent} from './number-spinner.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    NumberSpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatRippleModule,
    NgxMaskModule
  ],
  exports: [
    NumberSpinnerComponent
  ]
})
export class NumberSpinnerModule {
}
