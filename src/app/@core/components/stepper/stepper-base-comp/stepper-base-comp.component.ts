import {Component, OnDestroy} from '@angular/core';
import {StepperService} from '@core/components/stepper/stepper.service';
import {ScrolltotopService} from '@core/components/totop/services/scrolltotop.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'aim-stepper-base-comp',
  templateUrl: './stepper-base-comp.component.html',
  styleUrls: ['./stepper-base-comp.component.scss']
})
export class StepperBaseCompComponent implements OnDestroy {
  resetSubscription: Subscription;

  constructor(public stepperServ: StepperService,
              public scrollToTop: ScrolltotopService) {
    this.resetSubscription = this.stepperServ.clearStep.subscribe(() => {
      this.clear();
    });
  }

  async next(): Promise<any> {
    this.scrollToTop.toTop();
    await this.stepperServ.next();
  }

  async previous(): Promise<any> {
    this.scrollToTop.toTop();
    await this.stepperServ.previous();
  }

  async clear(): Promise<any> {
    return null;
  }

  ngOnDestroy(): void {
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
  }
}
