// core modules
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// own modules
import {
  AccordionModule,
  CookiesnotificationComponent,
  ImageSliderModule,
  ImageUploaderModule,
  MessagerModule,
  NumberSpinnerModule,
  PageHeaderModule,
  PromiseButtonModule,
  PwdcheckerModule,
  StepperModule,
  SubmenuModule,
  TotopModule
} from '@core/components';

// own directives
import {
  DndDirective,
  EnumSelectionDirective,
  FormValidationDirective,
  InputMatchValidationDirective,
  InputNotNullIfDirective,
  InputNumberValidationDirective,
  InputValidationDirective,
  InputValidationIfDirective,
  MenueSelectedDirective,
  OnlyNumberDirective,
  ScrollonDirective,
  UserExistValidationDirective,
  UserNotExistValidationDirective
} from '@core/directives';

// own services
import {
  AuthGuardService,
  CookieService,
  DialogerService,
  LoaderService,
  MenuService,
  ScrolltotopService,
  StorageService
} from '@core/services';
import {DialogerModule} from '@core/components/dialoger/dialoger.module';

@NgModule({
  declarations: [
    // own directives
    EnumSelectionDirective,
    FormValidationDirective,
    InputMatchValidationDirective,
    InputNotNullIfDirective,
    InputValidationDirective,
    InputValidationIfDirective,
    MenueSelectedDirective,
    ScrollonDirective,
    UserExistValidationDirective,
    UserNotExistValidationDirective,
    InputNumberValidationDirective,
    OnlyNumberDirective,
    DndDirective,
    CookiesnotificationComponent
  ],
  imports: [
    // own modules
    CommonModule,
    TotopModule,
    // LoadingSpinnerModule,
    PromiseButtonModule,
    SubmenuModule,
    PageHeaderModule,
    MessagerModule,
    DialogerModule,
    ImageSliderModule,
    PwdcheckerModule,
    StepperModule,
    AccordionModule,
    NumberSpinnerModule,
    ImageUploaderModule
  ],
  exports: [
    // own modules
    TotopModule,
    // LoadingSpinnerModule,
    PromiseButtonModule,
    SubmenuModule,
    PageHeaderModule,
    MessagerModule,
    DialogerModule,
    ImageSliderModule,
    PwdcheckerModule,
    StepperModule,
    AccordionModule,
    NumberSpinnerModule,
    ImageUploaderModule,
    // own directives
    EnumSelectionDirective,
    FormValidationDirective,
    InputMatchValidationDirective,
    InputNotNullIfDirective,
    InputValidationDirective,
    InputValidationIfDirective,
    MenueSelectedDirective,
    ScrollonDirective,
    UserExistValidationDirective,
    UserNotExistValidationDirective,
    InputNumberValidationDirective,
    OnlyNumberDirective,
    DndDirective,
    CookiesnotificationComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        StorageService,
        AuthGuardService,
        DialogerService,
        MenuService,
        ScrolltotopService,
        CookieService,
        LoaderService
      ]
    };
  }
}
