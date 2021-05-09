import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Directive({
  selector: '[aimUserExistValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UserExistValidationDirective),
    multi: true
  }]
})
export class UserExistValidationDirective implements Validator {
  constructor(private httpClient: HttpClient) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.httpClient.get(environment.idpUrl + '/account/exists' + '?uname=' + c.value)
        .pipe(map((data: any) => {
          if (data.UserExists === true) {
            return {user: true};
          }
          return null;
        }));
  }
}
