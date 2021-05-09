import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from '@core/components/stepper/stepper.service';
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';
import {Subscription} from 'rxjs';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'aim-stepper-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit, OnDestroy {
  nextSubscription: Subscription;
  previousSubscription: Subscription;

  slideIndex = 0;
  player: AnimationPlayer;

  constructor(private stepperServ: StepperService,
              private animationBuilder: AnimationBuilder,
              private elementRef: ElementRef) {
    this.stepperServ.registerSlider().then((indx) => {
      this.slideIndex = indx;
    });
  }

  ngOnInit(): void {
    this.nextSubscription = this.stepperServ.nextStep.subscribe(() => {
      const lastPos = ((this.slideIndex - this.stepperServ.selectedIndex) * 100) + 100;
      const currentPos = (this.slideIndex - this.stepperServ.selectedIndex) * 100;

      this.animateMe(lastPos, currentPos);
    });

    this.previousSubscription = this.stepperServ.previousStep.subscribe(() => {
      const lastPos = ((this.slideIndex - this.stepperServ.selectedIndex) * 100) - 100;
      const currentPos = ((this.slideIndex - this.stepperServ.selectedIndex) * 100);

      this.animateMe(lastPos, currentPos);
    });

    this.setPosition();
  }

  passHeight(): void {
    if (this.slideIndex === this.stepperServ.selectedIndex) {
      this.stepperServ.passHeight(this.elementRef.nativeElement.offsetHeight);
    }
  }

  setPosition(): void {
    const lastPos = ((this.slideIndex - this.stepperServ.selectedIndex) * 100) + 100;
    const currentPos = (this.slideIndex - this.stepperServ.selectedIndex) * 100;

    this.animateMe(lastPos, currentPos);
  }

  animateMe(lastPos: number, currentPos: number): any {
    this.player = this.animationBuilder
      .build([
        style({
          left: lastPos + '%'
        }),
        animate('300ms', style({
          left: currentPos + '%'
        }))
      ]).create(this.elementRef.nativeElement);

    setTimeout(() => {
      this.player.play();
      this.passHeight();
    }, 0);
  }

  onResized(event: ResizedEvent): any {
    this.passHeight();
  }

  ngOnDestroy(): void {
    if (this.nextSubscription) {
      this.nextSubscription.unsubscribe();
    }

    if (this.previousSubscription) {
      this.previousSubscription.unsubscribe();
    }

    if (this.player) {
      this.player.destroy();
    }
  }
}
