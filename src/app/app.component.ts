import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CookieService} from '@core/services/cookie.service';
import {Subscription} from 'rxjs';
import {LoaderService} from '@core/services';

@Component({
  selector: 'aim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit {
  cookieCloseSubscription: Subscription;
  showCookiesNotification = true;

  constructor(private cookieService: CookieService,
              private changeDetector: ChangeDetectorRef,
              private loaderService: LoaderService) {
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.cookieCloseSubscription = this.cookieService.cookieClose.subscribe(() => {
      this.showCookiesNotification = !this.showCookiesNotification;
    });
  }

  ngOnDestroy(): void {
    if (this.cookieCloseSubscription) {
      this.cookieCloseSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    this.loaderService.hideLoader();
  }
}
