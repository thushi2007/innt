// core modules
import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Directive({
  selector: '[aimUserNotExistValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UserNotExistValidationDirective),
    multi: true
  }]
})
export class UserNotExistValidationDirective implements Validator {
  constructor(private httpClient: HttpClient) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.httpClient.get(environment.idpUrl + '/account/exists' + '?uname=' + c.value)
      .pipe(map((data: any) => {
        if (data.UserExists === false) {
          return {notuser: true};
        }
        return null;
      }));
  }
}
