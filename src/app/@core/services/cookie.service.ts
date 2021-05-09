import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private cookieCloseOfSubscriber = new Subject<any>();
  cookieClose = this.cookieCloseOfSubscriber.asObservable();

  constructor() {
  }

  closeNotification(): void {
    this.cookieCloseOfSubscriber.next();
  }
}
