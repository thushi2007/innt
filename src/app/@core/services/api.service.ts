import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  public get(url: string, reCaptchaV3?: any, options?: any): Observable<any> {
    const urlDest = environment.apiUrl + url;

    if (!options) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': `application/json; charset=utf-8`,
          Accept: 'application/json'
        })
      };
    }

    return this.httpClient.get<any>(urlDest, options);
  }

  public post(url: string, body: any, reCaptchaV3?: any, options?: any): Observable<any> {
    const bodyJson = JSON.stringify(body);
    const urlDest = environment.apiUrl + url;

    if (!options) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': `application/json; charset=utf-8`,
          Accept: 'application/json',
          reCaptchV3: reCaptchaV3 ? reCaptchaV3 : ''
        })
      };
    }

    return this.httpClient.post<any>(urlDest, bodyJson, options);
  }

  public put(url: string, body: any, reCaptchaV3?: any, options?: any): Observable<any> {
    const bodyJson = JSON.stringify(body);
    const urlDest = environment.apiUrl + url;

    if (!options) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': `application/json; charset=utf-8`,
          Accept: 'application/json',
          reCaptchV3: reCaptchaV3 ? reCaptchaV3 : ''
        })
      };
    }

    return this.httpClient.put<any>(urlDest, bodyJson, options);
  }

  public delete(url: string, reCaptchaV3?: any, options?: any): Observable<any> {
    const urlDest = environment.apiUrl + url;

    if (!options) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': `application/json; charset=utf-8`,
          Accept: 'application/json',
          reCaptchV3: reCaptchaV3 ? reCaptchaV3 : ''
        })
      };
    }

    return this.httpClient.delete<any>(urlDest, options);
  }

  public patch(url: string, body: string, reCaptchaV3?: any, options?: any): Observable<any> {
    const bodyJson = JSON.stringify(body);
    const urlDest = environment.apiUrl + url;

    if (!options) {
      options = {
        headers: new HttpHeaders({
          'Content-Type': `application/json; charset=utf-8`,
          Accept: 'application/json',
          reCaptchV3: reCaptchaV3 ? reCaptchaV3 : ''
        })
      };
    }

    return this.httpClient.patch<any>(urlDest, bodyJson, options);
  }

  public clientLogging(error: any): void {
    this.post(environment.apiUrl + '/client /logging', error);
  }
}
