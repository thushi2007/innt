import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[aimInputNumberValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputNumberValidationDirective),
    multi: true
  }]
})
export class InputNumberValidationDirective implements Validator {
  constructor() {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value === 0) {
      return {
        notnumber: true
      };
    }

    return null;
  }
}
