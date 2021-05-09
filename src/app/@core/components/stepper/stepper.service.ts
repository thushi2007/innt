import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService implements OnDestroy {
  private nextOfSubscriber = new Subject<any>();
  nextStep = this.nextOfSubscriber.asObservable();

  private previousOfSubscriber = new Subject<any>();
  previousStep = this.previousOfSubscriber.asObservable();

  private HeightOfSubscriber = new Subject<any>();
  heightStep = this.HeightOfSubscriber.asObservable();

  private ClearOfSubscriber = new Subject<any>();
  clearStep = this.ClearOfSubscriber.asObservable();

  totalSliders = 0;
  totalHeaders = 0;

  lastIndex = 0;
  selectedIndex = 0;

  constructor() {
  }

  registerSlider(): Promise<number> {
    return new Promise<number>((resolve) => {
      this.totalSliders += 1;
      resolve((this.totalSliders - 1));
    });
  }

  registerHeader(): Promise<number> {
    return new Promise<number>((resolve) => {
      this.totalHeaders += 1;
      resolve((this.totalHeaders - 1));
    });
  }

  next(): void {
    if ((this.totalSliders - 1) !== this.selectedIndex) {
      this.lastIndex = this.selectedIndex;
      this.selectedIndex += 1;

      this.nextOfSubscriber.next();
    }
  }

  previous(): void {
    if (0 !== this.selectedIndex) {
      this.lastIndex = this.selectedIndex;
      this.selectedIndex -= 1;
      this.previousOfSubscriber.next();
    }
  }

  passHeight(heigth: number): void {
    this.HeightOfSubscriber.next(heigth);
  }

  clear(): void {
    this.lastIndex = -1;
    this.selectedIndex = 0;

    this.ClearOfSubscriber.next();
    this.nextOfSubscriber.next();
  }

  reset(): void {
    this.totalSliders = 0;
    this.totalHeaders = 0;

    this.lastIndex = -1;
    this.selectedIndex = 0;
  }

  ngOnDestroy(): void {
    if (this.nextOfSubscriber) {
      this.nextOfSubscriber.unsubscribe();
    }

    if (this.previousOfSubscriber) {
      this.previousOfSubscriber.unsubscribe();
    }

    if (this.HeightOfSubscriber) {
      this.HeightOfSubscriber.unsubscribe();
    }

    if (this.ClearOfSubscriber) {
      this.ClearOfSubscriber.unsubscribe();
    }
  }
}
