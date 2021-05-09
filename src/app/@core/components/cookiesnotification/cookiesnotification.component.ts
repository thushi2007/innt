import {Component, HostBinding} from '@angular/core';
import {CookieService} from '@core/services/cookie.service';
import {StorageService} from '@core/services';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'aim-cookiesnotification',
  templateUrl: './cookiesnotification.component.html',
  styleUrls: ['./cookiesnotification.component.scss'],
  animations: [
    trigger('showHideCookieNotification', [
      transition(':enter', [
          style({
            transform: 'translateY(100%)',
          }),
          animate('200ms',
            style({
              transform: 'translateY(0%)'
            }))
        ]
      ),
      transition(':leave',
        [
          style({
            transform: 'translateY(0%)',
          }),
          animate('200ms',
            style({
              transform: 'translateY(100%)'
            }))
        ])
    ])
  ]
})
export class CookiesnotificationComponent {
  @HostBinding('@showHideCookieNotification') showHideCookieNotification;

  constructor(private cookieService: CookieService,
              private storageService: StorageService) {
    this.checkIfAlreadyShown();
  }

  closeNotification(): void {
    this.cookieService.closeNotification();
    this.createNotificationShownStorage();
  }

  checkIfAlreadyShown(): void {
    const shownTime = this.storageService.getItem('cookieShown');

    if (shownTime) {
      const shownDateTime = new Date(shownTime.showntime);
      const currentDateTime = new Date();

      shownDateTime.setMinutes(shownDateTime.getMinutes() + 30);

      if (shownDateTime > currentDateTime) {
        this.closeNotification();
      }
    }
  }

  createNotificationShownStorage(): void {
    this.storageService.setItem('cookieShown', {
      showntime: Date.now()
    });
  }
}
